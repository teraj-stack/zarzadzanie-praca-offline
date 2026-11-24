#!/usr/bin/env python3
import datetime
import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(APP_DIR, "tasks.json")
PORT = int(os.environ.get("PORT", "3500"))


def build_ics(tasks):
    def esc(val):
        return (
            str(val or "")
            .replace("\\", "\\\\")
            .replace("\r\n", "\\n")
            .replace("\n", "\\n")
            .replace(",", "\\,")
            .replace(";", "\\;")
        )

    now_stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//TaskKill Studio//Live Sync Calendar//PL",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:TaskKill Studio — Plan & Zadania",
        "X-WR-TIMEZONE:Europe/Warsaw",
    ]
    today = datetime.date.today().strftime("%Y%m%d")
    for t in tasks:
        if not isinstance(t, dict):
            continue
        if t.get("status") == "Done":
            continue
        tid = t.get("id", "x")
        title = t.get("title") or f"Zadanie #{tid}"
        prio = t.get("priority") or ""
        assignee = t.get("assignee") or ""
        body = t.get("body") or ""
        s_raw = (t.get("startDate") or "").replace("-", "")
        e_raw = (t.get("endDate") or s_raw).replace("-", "")
        dtstart = s_raw if len(s_raw) == 8 and s_raw.isdigit() else today
        try:
            d_end = datetime.datetime.strptime(e_raw if len(e_raw) == 8 and e_raw.isdigit() else dtstart, "%Y%m%d").date()
            dtend = (d_end + datetime.timedelta(days=1)).strftime("%Y%m%d")
        except Exception:
            dtend = dtstart
        summary = f"[{prio}] {title}" if prio else title
        desc = f"Przypisane: {assignee}\nStatus: {t.get('status', '')}\n{body}".strip()
        lines.extend([
            "BEGIN:VEVENT",
            f"UID:taskkill-{tid}@teraj-stack.local",
            f"DTSTAMP:{now_stamp}",
            f"DTSTART;VALUE=DATE:{dtstart}",
            f"DTEND;VALUE=DATE:{dtend}",
            f"SUMMARY:{esc(summary)}",
            f"DESCRIPTION:{esc(desc)}",
            "END:VEVENT",
        ])
    lines.append("END:VCALENDAR")
    return ("\r\n".join(lines) + "\r\n").encode("utf-8")


class LocalOfflineHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=APP_DIR, **kwargs)

    def do_GET(self):
        path_only = self.path.split("?", 1)[0]
        if path_only == "/api/calendar.ics":
            tasks = []
            if os.path.exists(DATA_FILE):
                try:
                    with open(DATA_FILE, "r", encoding="utf-8") as f:
                        parsed = json.load(f)
                        if isinstance(parsed, list):
                            tasks = parsed
                except Exception:
                    tasks = []
            ics_bytes = build_ics(tasks)
            self.send_response(200)
            self.send_header("Content-Type", "text/calendar; charset=utf-8")
            self.send_header("Content-Disposition", 'inline; filename="taskkill-studio.ics"')
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(ics_bytes)
            return
        if path_only == "/api/tasks":
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, "rb") as f:
                    body = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
            else:
                self.send_response(204)
                self.end_headers()
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/tasks":
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            try:
                parsed = json.loads(raw.decode("utf-8"))
                if not isinstance(parsed, list):
                    raise ValueError("Expected list")
                tmp_path = DATA_FILE + ".tmp"
                with open(tmp_path, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                os.replace(tmp_path, DATA_FILE)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(b'{"ok":true}')
            except Exception as exc:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(exc)}).encode("utf-8"))
            return
        self.send_response(404)
        self.end_headers()

    def log_message(self, fmt, *args):
        pass


import socket

class DualStackHTTPServer(ThreadingHTTPServer):
    address_family = socket.AF_INET6
    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        super().server_bind()


if __name__ == "__main__":
    server = DualStackHTTPServer(("::", PORT), LocalOfflineHandler)
    print(f"Local offline server listening on http://localhost:{PORT} and http://127.0.0.1:{PORT} (saving to {DATA_FILE})", flush=True)
    server.serve_forever()
