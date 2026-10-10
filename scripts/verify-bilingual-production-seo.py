"""Verify localized production SEO against a disposable example.com build."""

from pathlib import Path
from bs4 import BeautifulSoup
from xml.etree import ElementTree as ET

root = Path(__file__).resolve().parents[1] / "out"
base = "https://example.com"
slugs = ["", "solutions", "sectors", "warehouse-racking", "retail-shelving", "projects", "about", "jeddah", "riyadh", "contact"]
errors = []

for slug in slugs + ["privacy", "terms"]:
    for locale in ("ar", "en"):
        path = ("/en" if locale == "en" else "") + (f"/{slug}" if slug else "") or "/"
        file = root / (f"{path.strip('/')}.html" if path != "/" else "index.html")
        soup = BeautifulSoup(file.read_text(encoding="utf-8"), "html.parser")
        expected = base + (path if path != "/" else "")
        canonical = soup.find("link", rel="canonical")
        if not canonical or canonical.get("href") != expected:
            errors.append(f"Canonical mismatch: {path}")
        alternates = {tag.get("hreflang"): tag.get("href") for tag in soup.find_all("link", rel="alternate")}
        arabic = base + (f"/{slug}" if slug else "")
        english = base + "/en" + (f"/{slug}" if slug else "")
        if alternates != {"ar-SA": arabic, "en": english, "x-default": arabic}:
            errors.append(f"Alternate mismatch: {path}: {alternates}")
        robots = soup.find("meta", attrs={"name": "robots"})
        if slug in ("privacy", "terms") and (not robots or "noindex" not in robots.get("content", "")):
            errors.append(f"Legal route should remain noindex: {path}")

sitemap = ET.fromstring((root / "sitemap.xml").read_text(encoding="utf-8"))
namespace = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [item.text for item in sitemap.findall("s:url/s:loc", namespace)]
if len(urls) != 20 or any("privacy" in url or "terms" in url for url in urls):
    errors.append(f"Expected 20 indexable URLs and no legal routes: {len(urls)}")
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print("Production SEO passed: self canonicals and three language alternates on 24 routes; 20 indexable sitemap URLs; legal routes excluded.")
