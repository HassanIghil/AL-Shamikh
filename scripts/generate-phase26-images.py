"""Build static responsive assets without changing the source photographs."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public"
VARIANTS = {
    "photos/home-hero-1280.webp": (640, 960),
    "photos/home-hero-new.webp": (1280,),
    "photos/hero-jeddah.webp": (1280,),
    "photos/hero-jeddah-mobile.webp": (640,),
    "photos/hero-riyadh.webp": (1280,),
    "photos/hero-riyadh-mobile.webp": (640,),
    "photos/jeddah-stocked-warehouse.webp": (640, 960),
    "photos/hero.webp": (320, 640, 960, 1280),
    "photos/warehouse-2.jpeg": (320, 640),
    "photos/market.webp": (320, 640),
    "photos/store.webp": (320, 640),
    "photos/pharmacy.jpeg": (320, 640),
    "photos/home.webp": (320, 640),
    "images/jeddah-and-riyadh-night-banner.webp": (640, 1200),
    "logo.webp": (280,),
}

for name, widths in VARIANTS.items():
    source = ROOT / name
    with Image.open(source) as original:
        rgb = original.convert("RGBA" if "A" in original.getbands() else "RGB")
        for width in widths:
            height = round(original.height * width / original.width)
            target = source.with_name(f"{source.stem}-{width}.webp")
            rgb.resize((width, height), Image.Resampling.LANCZOS).save(
                target, "WEBP", quality=86, method=6
            )
            print(f"{target.relative_to(ROOT)} {target.stat().st_size} bytes")
