"""Local preview of Cloudflare-style clean URLs from the static export."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


OUT = Path(__file__).resolve().parents[1] / "out"


class ExportHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(OUT), **kwargs)

    def do_GET(self):
        path = urlsplit(self.path).path
        if path != "/" and not Path(path).suffix and (OUT / f"{path.lstrip('/')}.html").is_file():
            self.path = f"{path}.html"
        super().do_GET()


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8766), ExportHandler).serve_forever()
