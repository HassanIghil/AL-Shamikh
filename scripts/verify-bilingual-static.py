"""Check the exported bilingual preview without making network requests."""

from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse
import re
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[1] / "out"
slugs = ["", "solutions", "sectors", "warehouse-racking", "retail-shelving", "projects", "about", "jeddah", "riyadh", "contact", "privacy", "terms"]
errors = []
titles = set()


def html_file(path: str) -> Path:
    return root / (f"{path.strip('/')}.html" if path != "/" else "index.html")


for lang in ("ar", "en"):
    for slug in slugs:
        path = ("/en" if lang == "en" else "") + (f"/{slug}" if slug else "") or "/"
        file = html_file(path)
        if not file.is_file():
            errors.append(f"Missing route: {path}")
            continue
        soup = BeautifulSoup(file.read_text(encoding="utf-8"), "html.parser")
        document = soup.html
        if document.get("lang") != lang or document.get("dir") != ("ltr" if lang == "en" else "rtl"):
            errors.append(f"Wrong language/direction: {path}")
        h1s = soup.find_all("h1")
        if len(h1s) != 1:
            errors.append(f"Expected one H1 on {path}: {len(h1s)}")
        title = soup.title.get_text(strip=True) if soup.title else ""
        if not title or title in titles:
            errors.append(f"Missing or duplicate title: {path}")
        titles.add(title)
        description = soup.find("meta", attrs={"name": "description"})
        if not description or not description.get("content"):
            errors.append(f"Missing description: {path}")
        robots = soup.find("meta", attrs={"name": "robots"})
        if not robots or "noindex" not in robots.get("content", ""):
            errors.append(f"Preview index protection missing: {path}")
        if soup.find("link", attrs={"rel": "canonical"}):
            errors.append(f"Preview canonical present: {path}")
        switch = soup.find("a", class_="language-switch")
        counterpart = ("" if lang == "en" else "/en") + (f"/{slug}" if slug else "") or "/"
        if not switch or switch.get("href") != counterpart:
            errors.append(f"Language switch route wrong: {path}")
        for element in soup.find_all(["a", "img", "source"]):
            if element.name == "a":
                href = element.get("href", "")
                if href.startswith("/") and not href.startswith("//"):
                    target = href.split("#", 1)[0].split("?", 1)[0]
                    if target and not html_file(target).is_file() and not (root / target.lstrip("/")).exists():
                        errors.append(f"Broken internal link on {path}: {href}")
                if "wa.me/" in href:
                    parsed = urlparse(href)
                    if parsed.path != "/966546916315":
                        errors.append(f"Wrong WhatsApp number: {path}")
                    text = parse_qs(parsed.query).get("text", [""])[0]
                    if lang == "en" and re.search(r"[\u0600-\u06ff]", text):
                        errors.append(f"Arabic WhatsApp message on English route: {path}")
            if element.name == "img":
                src = element.get("src", "")
                if not element.has_attr("alt"):
                    errors.append(f"Image missing alt on {path}: {src}")
                if src.startswith("/") and not (root / src.lstrip("/")).is_file():
                    errors.append(f"Broken image on {path}: {src}")
            for candidate in element.get("srcset", "").split(","):
                source = candidate.strip().split(" ")[0]
                if source.startswith("/") and not (root / source.lstrip("/")).is_file():
                    errors.append(f"Broken responsive image on {path}: {source}")
        if lang == "en":
            for tag in soup(["script", "style", "svg", "noscript"]):
                tag.decompose()
            if re.search(r"[\u0600-\u06ff]", soup.body.get_text(" ", strip=True)):
                errors.append(f"Arabic visible text on English route: {path}")
        print(f"{path}: title, description, H1, links, images, locale and preview robots checked")

robots_file = (root / "robots.txt").read_text(encoding="utf-8")
if "Disallow: /" not in robots_file:
    errors.append("Preview robots.txt is not restrictive")
sitemap = (root / "sitemap.xml").read_text(encoding="utf-8")
if "<url>" in sitemap or "<loc>" in sitemap:
    errors.append("Preview sitemap is not empty")

english_404 = root / "en" / "404.html"
if not english_404.is_file():
    errors.append("Missing Cloudflare Pages English 404 fallback")
else:
    not_found = BeautifulSoup(english_404.read_text(encoding="utf-8"), "html.parser")
    if not not_found.html or not_found.html.get("lang") != "en" or not_found.html.get("dir") != "ltr":
        errors.append("English 404 has wrong HTML language or direction")
    not_found_robots = not_found.find("meta", attrs={"name": "robots"})
    if not not_found_robots or "noindex" not in not_found_robots.get("content", ""):
        errors.append("English 404 is missing noindex")

if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print("All 24 bilingual routes and preview safeguards passed.")
