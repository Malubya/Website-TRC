#!/usr/bin/env python3
"""Static file server for local preview, with caching fully disabled.

Plain `python -m http.server` sends no Cache-Control header, so browsers
apply heuristic caching and can silently serve a stale copy of an edited
file (this bit us on Website.dc.html's own internal self-fetch). This
wrapper just adds no-store headers to every response.
"""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5173

# Always serve from this file's own directory, regardless of CWD the launcher uses.
os.chdir(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    http.server.test(HandlerClass=NoCacheHandler, port=PORT)
