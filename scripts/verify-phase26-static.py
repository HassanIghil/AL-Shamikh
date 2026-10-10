"""Check the Cloudflare export and the Phase 26 image/SEO invariants."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "out"
ROUTES = [
    "index", "about", "contact", "jeddah", "privacy", "projects",
    "retail-shelving", "riyadh", "sectors", "solutions", "terms",
    "warehouse-racking",
]


class Tags(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))


for route in ROUTES:
    page = OUT / f"{route}.html"
    assert page.is_file(), f"missing route: {route}"
    parser = Tags()
    parser.feed(page.read_text(encoding="utf-8"))
    tags = parser.tags
    assert any(t == "title" for t, _ in tags), f"no title: {route}"
    assert any(t == "meta" and a.get("name") == "description" for t, a in tags), f"no description: {route}"
    assert any(t == "meta" and a.get("name") == "robots" and "noindex" in a.get("content", "") for t, a in tags), f"no noindex: {route}"
    assert not any(t == "link" and a.get("rel") == "canonical" for t, a in tags), f"preview canonical: {route}"
    assert sum(t == "h1" for t, _ in tags) == 1, f"H1 count: {route}"

    for tag, attrs in tags:
        if tag in ("img", "source"):
            if tag == "img":
                assert "alt" in attrs, f"missing alt: {route}"
            paths = [attrs.get("src", "")]
            paths += [part.strip().split(" ")[0] for part in attrs.get("srcset", "").split(",") if part.strip()]
            for path in paths:
                if path.startswith("/"):
                    target = urlsplit(path).path
                    assert (OUT / target.lstrip("/")).is_file(), f"broken image {route}: {target}"
        if tag == "a" and attrs.get("href", "").startswith("/"):
            target = urlsplit(attrs["href"]).path.strip("/")
            if target:
                assert (OUT / f"{target}.html").is_file() or (OUT / target).is_file(), f"broken link {route}: {target}"

home = (OUT / "index.html").read_text(encoding="utf-8")
assert "home-hero-1280-640.webp 640w" in home
assert "jeddah-and-riyadh-night-banner-640.webp 640w" in home
assert "wa.me/" in home
assert "Disallow: /" in (OUT / "robots.txt").read_text(encoding="utf-8")
assert "<url>" not in (OUT / "sitemap.xml").read_text(encoding="utf-8")
print(f"PASS: {len(ROUTES)} static routes, images, links, responsive markup, WhatsApp, preview indexing safeguards")
