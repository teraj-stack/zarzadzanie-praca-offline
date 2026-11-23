#!/usr/bin/env zsh
set -euo pipefail

export PATH="$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

SRC_DIR="/Users/krzysztofjarzyna/.gemini/antigravity/scratch/managing-work/offline-app"
RELEASE_DIR="$SRC_DIR/release"
APP_NAME="Zarządzanie Pracą.app"
APP_DIR="$RELEASE_DIR/$APP_NAME"
DMG_STAGE="$RELEASE_DIR/.dmg_stage"
DMG_PATH="$RELEASE_DIR/Zarzadzanie-Praca-Offline-macOS.dmg"
ZIP_PATH="$RELEASE_DIR/Zarzadzanie-Praca-Offline-macOS.zip"
ICONSET_DIR="$RELEASE_DIR/.AppIcon.iconset"
ICON_PNG="$RELEASE_DIR/.icon_1024.png"

rm -rf "$APP_DIR" "$DMG_STAGE" "$ICONSET_DIR" "$ICON_PNG" "$DMG_PATH" "$ZIP_PATH"
mkdir -p "$APP_DIR/Contents/MacOS" "$APP_DIR/Contents/Resources/web"

# 1. Copy static offline web files + initial tasks.json seed
for f in index.html styles.css app.js data.js tasks.json; do
  if [[ -f "$SRC_DIR/$f" ]]; then
    cp "$SRC_DIR/$f" "$APP_DIR/Contents/Resources/web/$f"
  fi
done

# 2. Generate a crisp 1024x1024 Kanban macOS AppIcon.icns
uv run --with pillow python3 - "$ICON_PNG" << 'PYICON'
import sys
from PIL import Image, ImageDraw

out_path = sys.argv[1]
S = 1024
img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

# Squircle-like rounded background
pad = 64
d.rounded_rectangle([pad, pad, S - pad, S - pad], radius=210, fill=(15, 23, 42, 255), outline=(56, 189, 248, 220), width=14)

# Subtle inner highlight
d.rounded_rectangle([pad + 24, pad + 24, S - pad - 24, S - pad - 24], radius=190, outline=(30, 41, 59, 255), width=6)

# 3 Kanban columns
col_w = 210
gap = 46
start_x = (S - (3 * col_w + 2 * gap)) // 2
top_y = 220
bot_y = 810
cols = [
    (start_x, (30, 41, 59, 255), (56, 189, 248, 255), [160, 120, 110]),
    (start_x + col_w + gap, (30, 41, 59, 255), (251, 191, 36, 255), [190, 140]),
    (start_x + 2 * (col_w + gap), (30, 41, 59, 255), (52, 211, 153, 255), [130, 130, 130]),
]

for cx, bg, accent, cards in cols:
    d.rounded_rectangle([cx, top_y, cx + col_w, bot_y], radius=32, fill=bg)
    # Column header bar
    d.rounded_rectangle([cx + 22, top_y + 24, cx + col_w - 22, top_y + 52], radius=14, fill=accent)
    cy = top_y + 82
    for ch in cards:
        if cy + ch <= bot_y - 24:
            d.rounded_rectangle([cx + 20, cy, cx + col_w - 20, cy + ch], radius=22, fill=(51, 65, 85, 255))
            d.rounded_rectangle([cx + 38, cy + 26, cx + col_w - 58, cy + 44], radius=9, fill=(226, 232, 240, 220))
            d.rounded_rectangle([cx + 38, cy + 58, cx + col_w - 92, cy + 72], radius=7, fill=(148, 163, 184, 180))
            cy += ch + 24

img.save(out_path, "PNG")
PYICON

mkdir -p "$ICONSET_DIR"
sips -z 16 16     "$ICON_PNG" --out "$ICONSET_DIR/icon_16x16.png"      >/dev/null
sips -z 32 32     "$ICON_PNG" --out "$ICONSET_DIR/icon_16x16@2x.png"   >/dev/null
sips -z 32 32     "$ICON_PNG" --out "$ICONSET_DIR/icon_32x32.png"      >/dev/null
sips -z 64 64     "$ICON_PNG" --out "$ICONSET_DIR/icon_32x32@2x.png"   >/dev/null
sips -z 128 128   "$ICON_PNG" --out "$ICONSET_DIR/icon_128x128.png"    >/dev/null
sips -z 256 256   "$ICON_PNG" --out "$ICONSET_DIR/icon_128x128@2x.png" >/dev/null
sips -z 256 256   "$ICON_PNG" --out "$ICONSET_DIR/icon_256x256.png"    >/dev/null
sips -z 512 512   "$ICON_PNG" --out "$ICONSET_DIR/icon_256x256@2x.png" >/dev/null
sips -z 512 512   "$ICON_PNG" --out "$ICONSET_DIR/icon_512x512.png"    >/dev/null
cp "$ICON_PNG"                      "$ICONSET_DIR/icon_512x512@2x.png"
iconutil -c icns "$ICONSET_DIR" -o "$APP_DIR/Contents/Resources/AppIcon.icns"
rm -rf "$ICONSET_DIR" "$ICON_PNG"

# 3. Write Info.plist
cat > "$APP_DIR/Contents/Info.plist" << 'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleDevelopmentRegion</key>
  <string>pl</string>
  <key>CFBundleDisplayName</key>
  <string>Zarządzanie Pracą</string>
  <key>CFBundleExecutable</key>
  <string>ZarzadzaniePraca</string>
  <key>CFBundleIconFile</key>
  <string>AppIcon</string>
  <key>CFBundleIdentifier</key>
  <string>local.zarzadzanie.praca.offline</string>
  <key>CFBundleInfoDictionaryVersion</key>
  <string>6.0</string>
  <key>CFBundleName</key>
  <string>Zarządzanie Pracą</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleShortVersionString</key>
  <string>1.0.0</string>
  <key>CFBundleVersion</key>
  <string>1</string>
  <key>LSMinimumSystemVersion</key>
  <string>12.0</string>
  <key>NSHighResolutionCapable</key>
  <true/>
</dict>
</plist>
PLIST

# 4. Write zero-dependency local Python 3 offline server with persistent user data dir
cat > "$APP_DIR/Contents/Resources/offline_server.py" << 'PYEOF'
#!/usr/bin/env python3
"""Zarządzanie Pracą — 100% Offline Local Server with persistent tasks.json."""

import json
import os
import shutil
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RESOURCES_DIR = os.path.dirname(os.path.abspath(__file__))
WEB_DIR = os.path.join(RESOURCES_DIR, "web")
SEED_FILE = os.path.join(WEB_DIR, "tasks.json")
DATA_DIR = os.environ.get(
    "ZARZADZANIE_DATA_DIR",
    os.path.expanduser("~/Library/Application Support/ZarzadzaniePraca"),
)
DATA_FILE = os.path.join(DATA_DIR, "tasks.json")
PORT = int(os.environ.get("ZARZADZANIE_PORT", "8766"))

os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(DATA_FILE) and os.path.exists(SEED_FILE):
    shutil.copy2(SEED_FILE, DATA_FILE)


class LocalOfflineHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_DIR, **kwargs)

    def do_GET(self):
        if self.path == "/__health":
            body = json.dumps({
                "status": "ok",
                "app": "Zarządzanie Pracą Offline",
                "port": PORT,
                "dataFile": DATA_FILE,
            }, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return

        if self.path == "/api/tasks":
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, "rb") as f:
                    body = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
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
            length = int(self.headers.get("Content-Length", "0") or "0")
            raw = self.rfile.read(length)
            try:
                parsed = json.loads(raw.decode("utf-8"))
                if not isinstance(parsed, list):
                    raise ValueError("Expected list")
                tmp_path = DATA_FILE + ".tmp"
                with open(tmp_path, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                os.replace(tmp_path, DATA_FILE)
                body = b'{"ok":true}'
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            except Exception as exc:
                body = json.dumps({"error": str(exc)}).encode("utf-8")
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
            return

        self.send_response(404)
        self.end_headers()

    def log_message(self, fmt, *args):
        pass


class ReusableHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    try:
        with ReusableHTTPServer(("127.0.0.1", PORT), LocalOfflineHandler) as server:
            server.serve_forever()
    except OSError as exc:
        sys.stderr.write(f"Zarządzanie Pracą server could not bind 127.0.0.1:{PORT}: {exc}\n")
        sys.exit(1)
PYEOF
chmod +x "$APP_DIR/Contents/Resources/offline_server.py"

# 5. Write native macOS executable launcher
cat > "$APP_DIR/Contents/MacOS/ZarzadzaniePraca" << 'LAUNCHER'
#!/usr/bin/env zsh
set -euo pipefail

APP_CONTENTS="$(cd "$(dirname "$0")/.." && pwd)"
RESOURCES_DIR="$APP_CONTENTS/Resources"
SERVER_SCRIPT="$RESOURCES_DIR/offline_server.py"
DATA_DIR="$HOME/Library/Application Support/ZarzadzaniePraca"
LOG_FILE="$HOME/Library/Logs/ZarzadzaniePraca.log"
PID_FILE="$DATA_DIR/server.pid"
PORT="8766"
URL="http://127.0.0.1:${PORT}/"

mkdir -p "$DATA_DIR" "$HOME/Library/Logs"

if ! /usr/bin/curl -sf "http://127.0.0.1:${PORT}/__health" >/dev/null 2>&1; then
  nohup /usr/bin/python3 "$SERVER_SCRIPT" >>"$LOG_FILE" 2>&1 &
  echo $! > "$PID_FILE"

  for _ in {1..25}; do
    if /usr/bin/curl -sf "http://127.0.0.1:${PORT}/__health" >/dev/null 2>&1; then
      break
    fi
    sleep 0.2
  done
fi

CHROME_PROFILE="$DATA_DIR/app-profile"
for BROWSER_BIN in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium"; do
  if [[ -x "$BROWSER_BIN" ]]; then
    nohup "$BROWSER_BIN" --app="$URL" --user-data-dir="$CHROME_PROFILE" --no-first-run >/dev/null 2>&1 &
    exit 0
  fi
done

/usr/bin/open "$URL"
LAUNCHER
chmod +x "$APP_DIR/Contents/MacOS/ZarzadzaniePraca"

# 6. Ad-hoc sign
codesign --force --deep --sign - "$APP_DIR" >/dev/null 2>&1 || true

# 7. Create portable ZIP archive
(cd "$RELEASE_DIR" && /usr/bin/zip -qry "$ZIP_PATH" "$APP_NAME")

# 8. Create macOS .dmg installer
mkdir -p "$DMG_STAGE"
cp -R "$APP_DIR" "$DMG_STAGE/"
ln -s /Applications "$DMG_STAGE/Applications"
cat > "$DMG_STAGE/INSTRUKCJA_INSTALACJI.txt" << 'TXT'
ZARZĄDZANIE PRACĄ — NIEZALEŻNA APLIKACJA OFFLINE (macOS)
========================================================

1. Przeciągnij ikonę "Zarządzanie Pracą.app" na folder "Applications" (Aplikacje).
2. Otwórz "Zarządzanie Pracą" z folderu Aplikacje lub przez Spotlight (Cmd + Spacja).
3. Wszystkie zadania zapisują się automatycznie i lokalnie w pliku:
   ~/Library/Application Support/ZarzadzaniePraca/tasks.json

Aplikacja działa w 100% offline na porcie http://127.0.0.1:8766
i nie wymaga internetu ani uruchomionego Antigravity.
TXT

hdiutil create \
  -volname "Zarzadzanie Praca Offline" \
  -srcfolder "$DMG_STAGE" \
  -ov \
  -format UDZO \
  "$DMG_PATH" >/dev/null

rm -rf "$DMG_STAGE"

echo "BUILD_COMPLETE"
ls -lh "$RELEASE_DIR"
