(() => {
  const STORAGE_KEY = "managing_work_offline_tasks_v1";
  const THEME_KEY = "managing_work_offline_theme";
  const PROJECT_TITLE_KEY = "managing_work_project_title_v1";
  const MINDMAP_POS_KEY = "managing_work_mindmap_pos_v1";
  const MINDMAP_MEDIA_KEY = "managing_work_mindmap_media_v1";
  const MINDMAP_BG_KEY = "managing_work_mindmap_bg_v1";
  const MINDMAP_CUSTOM_BG_KEY = "managing_work_mindmap_custom_bg_v1";

  const MINDMAP_EMOJIS = [
    "💖", "🩷", "❤️", "🌈", "🦋", "🌸", "☀️",
    "☁️", "⭐", "✨", "😊", "🎀", "👑", "🍀",
    "🧸", "🫧", "🏥", "🩺", "🧬", "💊", "🚀",
    "🎯", "💡", "🔥", "✅", "⚡", "⚠️", "📅",
    "🗺️", "🧩", "🛠️", "🎨", "📸", "🎬", "🔊",
    "💬", "📊", "📝", "🔒", "🌐", "📱", "🏆", "🎉",
  ];

  const MINDMAP_STICKERS = [
    { id: "heart", label: "Serduszko", bg: "linear-gradient(135deg,#fb7185,#ec4899)", svg: `<svg viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.7-9.2-9.1C1.7 8.4 3.5 5 6.8 5c2 0 3.6 1.1 5.2 2.9C13.6 6.1 15.2 5 17.2 5c3.3 0 5.1 3.4 4 6.4-1.7 4.4-9.2 9.1-9.2 9.1Z"/></svg>` },
    { id: "smile", label: "Uśmiech", bg: "linear-gradient(135deg,#facc15,#fb923c)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2" fill="#fff"/><circle cx="15" cy="10" r="1.2" fill="#fff"/><path d="M8.5 14.5c1 1.6 2.2 2.3 3.5 2.3s2.5-.7 3.5-2.3"/></svg>` },
    { id: "star", label: "Gwiazdka", bg: "linear-gradient(135deg,#fde047,#f59e0b)", svg: `<svg viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9Z"/></svg>` },
    { id: "rainbow", label: "Tęcza", bg: "linear-gradient(135deg,#38bdf8,#a855f7,#f472b6)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M3 17a9 9 0 0 1 18 0"/><path d="M6.5 17a5.5 5.5 0 0 1 11 0"/><path d="M10 17a2 2 0 0 1 4 0"/></svg>` },
    { id: "flower", label: "Kwiatek", bg: "linear-gradient(135deg,#f472b6,#fb7185)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="2.6" fill="#fff"/><circle cx="12" cy="6.2" r="2.4"/><circle cx="17.5" cy="10.2" r="2.4"/><circle cx="15.4" cy="16.6" r="2.4"/><circle cx="8.6" cy="16.6" r="2.4"/><circle cx="6.5" cy="10.2" r="2.4"/></svg>` },
    { id: "butterfly", label: "Motylek", bg: "linear-gradient(135deg,#c084fc,#38bdf8)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v11"/><path d="M12 10C9.5 6 4 6 4 10c0 2.5 2.5 3.5 5 3.5-2 1-3 2.5-2 4 1.2 1.8 4 1 5-1.5"/><path d="M12 10c2.5-4 8-4 8 0 0 2.5-2.5 3.5-5 3.5 2 1 3 2.5 2 4-1.2 1.8-4 1-5-1.5"/></svg>` },
    { id: "cloud", label: "Chmurka", bg: "linear-gradient(135deg,#7dd3fc,#60a5fa)", svg: `<svg viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 6.7 8.8 3.8 3.8 0 0 0 7 18Z"/></svg>` },
    { id: "crown", label: "Korona", bg: "linear-gradient(135deg,#fbbf24,#f43f5e)", svg: `<svg viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="m3 18 1.5-10 5 4.5L12 6l2.5 6.5 5-4.5L21 18Z"/></svg>` },
    { id: "clinic", label: "Klinika", bg: "linear-gradient(135deg,#0ea5e9,#2563eb)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>` },
    { id: "target", label: "Cel / Priorytet", bg: "linear-gradient(135deg,#ef4444,#f97316)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="#fff"/></svg>` },
    { id: "idea", label: "Pomysł", bg: "linear-gradient(135deg,#f59e0b,#eab308)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.1 1.2 1.2 2.1h4.6c.1-.9.5-1.6 1.2-2.1A6 6 0 0 0 12 3Z"/></svg>` },
    { id: "done", label: "Gotowe", bg: "linear-gradient(135deg,#10b981,#22c55e)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>` },
    { id: "alert", label: "Uwaga", bg: "linear-gradient(135deg,#f43f5e,#e11d48)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 2.4 17.6A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>` },
    { id: "design", label: "Design / UI", bg: "linear-gradient(135deg,#8b5cf6,#ec4899)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 0 18c1.5 0 2.5-1 2.5-2.2 0-.6-.2-1.1-.6-1.5-.3-.3-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4-4-7.2-9-7.2Z"/><circle cx="7.5" cy="10.5" r="1" fill="#fff"/><circle cx="11" cy="7.5" r="1" fill="#fff"/><circle cx="15.5" cy="9" r="1" fill="#fff"/></svg>` },
    { id: "calendar", label: "Harmonogram", bg: "linear-gradient(135deg,#3b82f6,#6366f1)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>` },
    { id: "team", label: "Zespół", bg: "linear-gradient(135deg,#06b6d4,#0284c7)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.2 0 4 1.8 4 4"/></svg>` },
    { id: "camera", label: "3D / Foto", bg: "linear-gradient(135deg,#14b8a6,#0d9488)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"/><circle cx="12" cy="13" r="3.5"/></svg>` },
    { id: "audio", label: "Dźwięk / UX", bg: "linear-gradient(135deg,#a855f7,#7c3aed)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>` },
    { id: "doc", label: "Mapa / Plan", bg: "linear-gradient(135deg,#64748b,#475569)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>` },
    { id: "rocket", label: "Wdrożenie", bg: "linear-gradient(135deg,#ec4899,#f97316)", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/></svg>` },
  ];

  const MINDMAP_PALETTE = [
    "#3b82f6",
    "#a855f7",
    "#10b981",
    "#f59e0b",
    "#ec4899",
    "#06b6d4",
    "#f97316",
    "#84cc16",
  ];

  const COLUMNS = [
    { key: "Todo", label: "Do zrobienia", css: "status-Todo", color: "#64748b" },
    { key: "In Progress", label: "W trakcie", css: "status-InProgress", color: "#3b82f6" },
    { key: "Paused", label: "Wstrzymane", css: "status-Paused", color: "#a855f7" },
    { key: "Done", label: "Gotowe", css: "status-Done", color: "#22c55e" },
  ];

  let tasks = loadTasks();
  let currentView = "mindmap";
  let sortField = "id";
  let sortAsc = true;
  let draggedId = null;

  // MindNode view state
  let projectTitle = localStorage.getItem(PROJECT_TITLE_KEY) || "bmclinic.co";
  if (projectTitle === "Zarządzanie Pracą") {
    projectTitle = "bmclinic.co";
    localStorage.setItem(PROJECT_TITLE_KEY, projectTitle);
  }
  let mindmapGroupBy = "label"; // status | type | priority | label
  let mindmapLayout = "balanced"; // balanced | right
  const mindmapCollapsed = new Set();
  const mindmapTransform = { x: 0, y: 0, scale: 1, initialized: false };
  let mindmapQuickAdd = null; // { targetLabel, defaults }
  let mindmapMedia = loadMindMapMedia(); // { [nodeId]: { emoji?, sticker?, image? } }
  let mindmapMediaEditor = null; // { nodeId, nodeLabel, tab: 'emoji'|'sticker'|'image' }
  let mindmapBg = localStorage.getItem(MINDMAP_BG_KEY) || "photo"; // photo | ivory | sky | sage | custom | dark
  let mindmapCustomBg = localStorage.getItem(MINDMAP_CUSTOM_BG_KEY) || "";
  let mindmapPreviewOpen = true;
  let mindmapPreviewXl = false;
  let mindmapPreviewTaskId = null;
  let mindmapPreviewReloadNonce = 0;

  function ensureLivePreviewStyles() {
    if (document.getElementById("mm-live-preview-styles")) return;
    const style = document.createElement("style");
    style.id = "mm-live-preview-styles";
    style.textContent = `
      .mm-workspace-row {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }
      .mm-workspace-row .mindmap-viewport {
        flex: 1 1 auto;
        min-width: 0;
      }
      .mm-preview-dock {
        width: 480px;
        min-width: 440px;
        max-width: 48vw;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 12px;
        background: var(--surface, #13192e);
        border-left: 1px solid var(--border, #2e3d66);
        overflow-y: auto;
        z-index: 25;
        transition: width 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
      }
      .mm-preview-dock:hover {
        width: 640px;
        max-width: 58vw;
        box-shadow: -12px 0 36px rgba(0, 0, 0, 0.45);
      }
      .mm-preview-dock.is-xl {
        width: 720px;
        min-width: 600px;
        max-width: 65vw;
      }
      .mm-preview-dock:hover .mm-preview-frame-wrap {
        height: 440px;
      }
      .mm-preview-dock.hidden {
        display: none;
      }
      .mm-preview-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
      }
      .mm-preview-title {
        font-size: 14px;
        font-weight: 700;
        color: var(--text, #f8fafc);
        line-height: 1.3;
      }
      .mm-preview-url {
        font-size: 11.5px;
        color: #38bdf8;
        word-break: break-all;
        margin-top: 2px;
      }
      .mm-preview-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 7px 10px;
        background: rgba(15, 23, 42, 0.7);
        border-bottom: 1px solid var(--border, #2e3d66);
        font-size: 11.5px;
        color: var(--muted, #94a3b8);
      }
      .mm-preview-actions {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-wrap: wrap;
      }
      .mm-preview-actions button,
      .mm-preview-actions a {
        border: 1px solid var(--border, #334155);
        background: rgba(30, 41, 59, 0.9);
        color: #f8fafc;
        font-size: 11px;
        font-weight: 600;
        padding: 3px 8px;
        border-radius: 6px;
        cursor: pointer;
        text-decoration: none;
      }
      .mm-preview-actions button:hover,
      .mm-preview-actions button.active,
      .mm-preview-actions a:hover {
        border-color: #38bdf8;
        color: #38bdf8;
      }
      .mm-preview-card {
        border: 1px solid var(--border, #2e3d66);
        border-radius: 12px;
        overflow: hidden;
        background: #070b14;
        box-shadow: 0 10px 26px rgba(0, 0, 0, 0.3);
      }
      .mm-preview-dual {
        display: grid;
        grid-template-columns: 1fr 164px;
        gap: 10px;
        padding: 10px;
        background: #070b14;
        align-items: start;
      }
      .mm-preview-phone-wrap {
        position: relative;
        width: 158px;
        height: 332px;
        border-radius: 22px;
        border: 4px solid #334155;
        background: #0f172a;
        overflow: hidden;
        box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45);
        cursor: pointer;
      }
      .mm-preview-phone-notch {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 48px;
        height: 8px;
        border-radius: 999px;
        background: #020617;
        z-index: 4;
      }
      .mm-preview-phone-wrap iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 390px;
        height: 844px;
        border: none;
        transform: scale(0.385);
        transform-origin: 0 0;
        pointer-events: none;
        background: #fff;
      }
      .mm-mobile-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        border-radius: 999px;
        background: rgba(52, 211, 153, 0.16);
        border: 1px solid rgba(52, 211, 153, 0.5);
        color: #6ee7b7;
        font-size: 10.5px;
        font-weight: 800;
      }
      .mm-preview-frame-wrap {
        position: relative;
        width: 100%;
        height: 332px;
        border-radius: 10px;
        overflow: hidden;
        background: #0f172a;
        cursor: pointer;
        transition: height 0.2s ease;
      }
      .mm-preview-dock.is-xl .mm-preview-frame-wrap {
        height: 470px;
      }
      .mm-preview-frame-wrap iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 1280px;
        height: 860px;
        border: none;
        transform: scale(0.388);
        transform-origin: 0 0;
        pointer-events: none;
        background: #fff;
        transition: transform 0.2s ease;
      }
      .mm-preview-dock.is-xl .mm-preview-frame-wrap iframe {
        transform: scale(0.512);
      }
      /* Bold comic-book owner badges (Milenka vs Janek) */
      .mn-comic-owner {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 9px;
        border-radius: 999px;
        border: 2.5px solid #0b0f19;
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        box-shadow: 2.5px 2.5px 0 #0b0f19;
        cursor: pointer;
        transform: rotate(-1.5deg);
        transition: transform 0.12s ease;
        flex-shrink: 0;
      }
      .mn-comic-owner:hover {
        transform: rotate(0deg) scale(1.07);
      }
      .mn-comic-milenka {
        background: linear-gradient(135deg, #ff5db1, #ff99d6);
        color: #1a0613;
      }
      .mn-comic-janek {
        background: linear-gradient(135deg, #38bdf8, #facc15);
        color: #0b1120;
      }
      .mn-comic-both {
        background: linear-gradient(135deg, #a855f7, #34d399);
        color: #090d16;
      }
      .mn-social-tag {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 2px 7px;
        border-radius: 999px;
        font-size: 10.5px;
        font-weight: 800;
        cursor: pointer;
        border: 1.5px dashed rgba(148, 163, 184, 0.45);
        background: rgba(15, 23, 42, 0.45);
        color: #94a3b8;
        transition: all 0.14s ease;
      }
      .mn-social-tag:hover {
        border-color: #60a5fa;
        color: #e0f2fe;
      }
      .mn-social-tag.is-active {
        border: 2px solid #0b0f19;
        background: linear-gradient(135deg, #1877f2, #ec4899);
        color: #ffffff;
        box-shadow: 2px 2px 0 #0b0f19;
        letter-spacing: 0.03em;
      }
      .mm-preview-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 8px;
        background: linear-gradient(to top, rgba(11, 16, 27, 0.55), transparent 45%);
        opacity: 0;
        transition: opacity 0.15s;
      }
      .mm-preview-frame-wrap:hover .mm-preview-overlay {
        opacity: 1;
      }
      .mm-preview-overlay span {
        background: rgba(15, 23, 42, 0.9);
        color: #f8fafc;
        font-size: 11px;
        font-weight: 600;
        padding: 4px 9px;
        border-radius: 999px;
        border: 1px solid rgba(56, 189, 248, 0.5);
      }
      .mm-preview-desc {
        font-size: 12.5px;
        color: var(--muted, #cbd5e1);
        line-height: 1.45;
      }
      .mn-node-task.is-preview-active {
        box-shadow: 0 0 0 2.5px #38bdf8, 0 8px 22px rgba(56, 189, 248, 0.35) !important;
      }
      .mn-preview-pill {
        margin-left: 6px;
        border: 1px solid rgba(56, 189, 248, 0.45);
        background: rgba(56, 189, 248, 0.14);
        color: #7dd3fc;
        font-size: 10.5px;
        font-weight: 700;
        padding: 1px 6px;
        border-radius: 999px;
        cursor: pointer;
      }
      .mn-preview-pill:hover {
        background: rgba(56, 189, 248, 0.28);
      }
      .mm-fullscreen-modal {
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(5, 8, 18, 0.86);
        backdrop-filter: blur(6px);
        display: flex;
        flex-direction: column;
        padding: 18px;
      }
      .mm-fullscreen-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 14px;
        overflow: hidden;
      }
      .mm-fullscreen-box iframe {
        flex: 1;
        width: 100%;
        border: none;
        background: #fff;
      }
      /* Larger, high-contrast, highly readable MindNode tree */
      .mn-node-root {
        padding: 14px 22px !important;
        border-radius: 18px !important;
        border-width: 2.5px !important;
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.45) !important;
      }
      .mn-node-root .mn-root-title,
      .mn-node-root .mn-title {
        font-size: 21px !important;
        font-weight: 800 !important;
        letter-spacing: -0.01em;
      }
      .mn-node-root .mn-root-sub,
      .mn-node-root .mn-subtitle {
        font-size: 13px !important;
        font-weight: 600 !important;
        opacity: 0.92 !important;
      }
      .mn-node-branch {
        padding: 11px 18px !important;
        border-radius: 14px !important;
        border-width: 2px !important;
        font-size: 16px !important;
        font-weight: 800 !important;
        box-shadow: 0 8px 22px rgba(15, 23, 42, 0.32) !important;
      }
      .mn-node-branch .mn-branch-title {
        font-size: 16px !important;
        font-weight: 800 !important;
      }
      .mn-node-branch .mn-branch-count {
        font-size: 13px !important;
        font-weight: 800 !important;
        padding: 2px 8px !important;
      }
      .mn-node-task {
        padding: 11px 14px !important;
        border-radius: 14px !important;
        border-width: 2px !important;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.28) !important;
      }
      .mn-task-title {
        font-size: 15.5px !important;
        font-weight: 700 !important;
        line-height: 1.3 !important;
        white-space: normal !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical !important;
        overflow: hidden !important;
      }
      .mn-task-meta {
        font-size: 12.5px !important;
        font-weight: 600 !important;
        margin-top: 5px !important;
        gap: 6px !important;
        opacity: 0.95 !important;
      }
      .mn-check {
        width: 22px !important;
        height: 22px !important;
        min-width: 22px !important;
        font-size: 13px !important;
      }
      .mn-preview-pill {
        font-size: 12px !important;
        padding: 2px 8px !important;
      }
      .mn-open-link {
        font-size: 12px !important;
      }
      .mindmap-edges path.mindmap-edge {
        vector-effect: non-scaling-stroke;
        stroke-linecap: round;
        opacity: 0.94 !important;
        filter: drop-shadow(0 0 3px rgba(15, 23, 42, 0.55));
      }
      .mindmap-edges path.mindmap-edge-depth-1 {
        stroke-width: 5.5px !important;
      }
      .mindmap-edges path.mindmap-edge-depth-2 {
        stroke-width: 3.8px !important;
      }
      .mindmap-edges path.mindmap-edge-depth-3 {
        stroke-width: 3.2px !important;
      }
      @keyframes mindmap-firefly-flow {
        0% {
          stroke-dashoffset: 240;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      .mindmap-edges path.mindmap-firefly {
        fill: none;
        vector-effect: non-scaling-stroke;
        stroke: #fff9c4;
        stroke-width: 6.5px !important;
        stroke-linecap: round;
        stroke-dasharray: 12 228;
        opacity: 0.98 !important;
        filter: drop-shadow(0 0 6px #fde047) drop-shadow(0 0 12px #facc15);
        animation: mindmap-firefly-flow 3.2s linear infinite;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  function openFullscreenPreview(task) {
    if (!task || !task.url) return;
    const existing = document.getElementById("mm-fullscreen-modal");
    if (existing) existing.remove();
    const modal = document.createElement("div");
    modal.id = "mm-fullscreen-modal";
    modal.className = "mm-fullscreen-modal";
    modal.innerHTML = `
      <div class="mm-fullscreen-box">
        <div class="mm-preview-bar">
          <span><strong>${escapeHtml(task.title)}</strong> — ${escapeHtml(task.url)}</span>
          <div class="mm-preview-actions">
            <a href="${escapeHtml(task.url)}" target="_blank" rel="noopener">↗ Nowa karta</a>
            <button type="button" id="mm-fs-close">✕ Zamknij (Esc)</button>
          </div>
        </div>
        <iframe src="${escapeHtml(task.url)}"></iframe>
      </div>
    `;
    const close = () => {
      modal.remove();
      document.removeEventListener("keydown", onEsc);
    };
    const onEsc = (ev) => {
      if (ev.key === "Escape") close();
    };
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) close();
    });
    modal.querySelector("#mm-fs-close").addEventListener("click", close);
    document.addEventListener("keydown", onEsc);
    document.body.appendChild(modal);
  }

  function loadMindMapMedia() {
    try {
      const raw = localStorage.getItem(MINDMAP_MEDIA_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") return parsed;
      }
    } catch (_) {}
    return {};
  }

  function saveMindMapMedia() {
    try {
      localStorage.setItem(MINDMAP_MEDIA_KEY, JSON.stringify(mindmapMedia));
    } catch (_) {
      showToast("Uwaga: mało miejsca w pamięci przeglądarki na kolejne zdjęcia");
    }
  }

  function setNodeMedia(nodeId, patch) {
    const cur = mindmapMedia[nodeId] || {};
    const next = { ...cur, ...patch };
    Object.keys(next).forEach((k) => {
      if (!next[k]) delete next[k];
    });
    if (Object.keys(next).length) mindmapMedia[nodeId] = next;
    else delete mindmapMedia[nodeId];
    saveMindMapMedia();
    render();
  }

  function clearNodeMedia(nodeId) {
    delete mindmapMedia[nodeId];
    saveMindMapMedia();
    render();
  }

  function compressImageFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const maxW = 440;
          const scale = img.width > maxW ? maxW / img.width : 1;
          const w = Math.max(1, Math.round(img.width * scale));
          const h = Math.max(1, Math.round(img.height * scale));
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.82));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderNodeVisualBadges(nodeId) {
    const m = mindmapMedia[nodeId];
    if (!m) return { prefix: "", imageHtml: "" };
    let prefix = "";
    if (m.sticker) {
      const st = MINDMAP_STICKERS.find((s) => s.id === m.sticker);
      if (st) {
        prefix += `<span class="mn-sticker-badge" style="background:${st.bg}" title="${escapeHtml(st.label)}">${st.svg}</span>`;
      }
    }
    if (m.emoji) {
      prefix += `<span class="mn-emoji-badge">${escapeHtml(m.emoji)}</span>`;
    }
    const imageHtml = m.image
      ? `<img class="mn-node-image" src="${escapeHtml(m.image)}" alt="Grafika węzła" />`
      : "";
    return { prefix, imageHtml };
  }

  const filters = {
    search: "",
    type: "ALL",
    priority: "ALL",
  };

  // DOM refs
  const contentEl = document.getElementById("app-content");
  const statsEl = document.getElementById("stats-bar");
  const modalEl = document.getElementById("task-modal");
  const formEl = document.getElementById("task-form");
  const toastEl = document.getElementById("toast");

  function loadTasks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (_) {}
    return structuredClone(window.INITIAL_TASKS || []);
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    if (location.protocol.startsWith("http")) {
      fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasks),
      }).catch(() => {});
    }
  }

  async function syncFromDiskIfAvailable() {
    if (!location.protocol.startsWith("http")) return;
    try {
      const res = await fetch("/api/tasks", { cache: "no-store" });
      if (res.status === 200) {
        const diskTasks = await res.json();
        if (Array.isArray(diskTasks)) {
          tasks = diskTasks;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
          render();
          return;
        }
      }
      // First run: persist initial tasks to tasks.json on local disk
      saveTasks();
    } catch (_) {}
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.add("hidden"), 2400);
  }

  function getFilteredTasks() {
    const q = filters.search.trim().toLowerCase();
    return tasks.filter((t) => {
      if (filters.type !== "ALL" && t.type !== filters.type) return false;
      if (filters.priority !== "ALL" && t.priority !== filters.priority) return false;
      if (q) {
        const hay = `#${t.id} ${t.title} ${t.body || ""} ${(t.labels || []).join(" ")} ${t.assignee || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderStats(list) {
    const total = list.length;
    const done = list.filter((t) => t.status === "Done").length;
    const inProg = list.filter((t) => t.status === "In Progress").length;
    const paused = list.filter((t) => t.status === "Paused").length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    statsEl.innerHTML = `
      <span class="stat-item">Widocznych zadań: <strong>${total}</strong></span>
      <span class="stat-item">W trakcie: <strong>${inProg}</strong></span>
      <span class="stat-item">Wstrzymane: <strong>${paused}</strong></span>
      <span class="stat-item">Gotowe: <strong>${done}</strong></span>
      <div class="progress-wrap">
        <span>Postęp: <strong>${pct}%</strong></span>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    `;
  }

  function renderBoard(list) {
    const board = document.createElement("div");
    board.className = "board";

    COLUMNS.forEach((col) => {
      const colTasks = list.filter((t) => t.status === col.key);
      const colEl = document.createElement("div");
      colEl.className = "column";
      colEl.dataset.status = col.key;

      colEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        colEl.classList.add("drag-over");
      });
      colEl.addEventListener("dragleave", () => colEl.classList.remove("drag-over"));
      colEl.addEventListener("drop", (e) => {
        e.preventDefault();
        colEl.classList.remove("drag-over");
        if (draggedId == null) return;
        const t = tasks.find((x) => x.id === draggedId);
        if (t && t.status !== col.key) {
          t.status = col.key;
          saveTasks();
          render();
          showToast(`Przeniesiono #${t.id} → ${col.label}`);
        }
        draggedId = null;
      });

      colEl.innerHTML = `
        <div class="column-header">
          <span class="column-title">
            <span class="status-dot ${col.css}"></span>
            ${col.label}
          </span>
          <span class="count-badge">${colTasks.length}</span>
        </div>
      `;

      colTasks.forEach((t) => {
        const card = document.createElement("article");
        card.className = "card";
        card.draggable = true;
        card.addEventListener("dragstart", () => {
          draggedId = t.id;
          card.classList.add("dragging");
        });
        card.addEventListener("dragend", () => card.classList.remove("dragging"));
        card.addEventListener("click", () => openModal(t.id));

        card.innerHTML = `
          <div class="card-top">
            <span>#${t.id}</span>
            <span>${escapeHtml(t.assignee || "")}</span>
          </div>
          <div class="card-title">${escapeHtml(t.title)}</div>
          <div class="card-meta">
            <span class="badge prio-${escapeHtml(t.priority)}">${escapeHtml(t.priority)}</span>
            <span class="badge type-${escapeHtml(t.type)}">${escapeHtml(t.type)}</span>
            ${(t.labels || []).map((l) => `<span class="badge" style="background:var(--surface-2);color:var(--muted)">${escapeHtml(l)}</span>`).join("")}
          </div>
          ${t.startDate || t.endDate ? `<div class="card-dates">${escapeHtml(t.startDate || "—")} → ${escapeHtml(t.endDate || "—")}</div>` : ""}
        `;
        colEl.appendChild(card);
      });

      board.appendChild(colEl);
    });

    contentEl.innerHTML = "";
    contentEl.appendChild(board);
  }

  function renderTable(list) {
    const sorted = [...list].sort((a, b) => {
      const av = a[sortField] ?? "";
      const bv = b[sortField] ?? "";
      const cmp = typeof av === "number" ? av - bv : String(av).localeCompare(String(bv), "pl");
      return sortAsc ? cmp : -cmp;
    });

    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    wrap.innerHTML = `
      <table>
        <thead>
          <tr>
            <th data-sort="id">#</th>
            <th data-sort="title">Zadanie</th>
            <th data-sort="status">Status</th>
            <th data-sort="priority">Priorytet</th>
            <th data-sort="type">Typ</th>
            <th data-sort="startDate">Start</th>
            <th data-sort="endDate">Koniec</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map((t) => `
            <tr data-id="${t.id}">
              <td>#${t.id}</td>
              <td><span class="row-title" data-open="${t.id}">${escapeHtml(t.title)}</span></td>
              <td>
                <select class="select inline-status" data-id="${t.id}">
                  ${COLUMNS.map((c) => `<option value="${c.key}" ${t.status === c.key ? "selected" : ""}>${c.label}</option>`).join("")}
                </select>
              </td>
              <td><span class="badge prio-${escapeHtml(t.priority)}">${escapeHtml(t.priority)}</span></td>
              <td><span class="badge type-${escapeHtml(t.type)}">${escapeHtml(t.type)}</span></td>
              <td>${escapeHtml(t.startDate || "—")}</td>
              <td>${escapeHtml(t.endDate || "—")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;

    wrap.querySelectorAll("th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const f = th.dataset.sort;
        if (sortField === f) sortAsc = !sortAsc;
        else { sortField = f; sortAsc = true; }
        render();
      });
    });

    wrap.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => openModal(Number(el.dataset.open)));
    });

    wrap.querySelectorAll(".inline-status").forEach((sel) => {
      sel.addEventListener("change", () => {
        const t = tasks.find((x) => x.id === Number(sel.dataset.id));
        if (t) {
          t.status = sel.value;
          saveTasks();
          render();
          showToast(`Zmieniono status #${t.id}`);
        }
      });
    });

    contentEl.innerHTML = "";
    contentEl.appendChild(wrap);
  }

  function renderRoadmap(list) {
    const dated = list.filter((t) => t.startDate && t.endDate).sort((a, b) => a.endDate.localeCompare(b.endDate));
    if (!dated.length) {
      contentEl.innerHTML = `<div class="roadmap"><p style="color:var(--muted)">Brak zadań z ustawioną datą startu i końca.</p></div>`;
      return;
    }

    const minMs = Math.min(...dated.map((t) => Date.parse(t.startDate)));
    const maxMs = Math.max(...dated.map((t) => Date.parse(t.endDate)));
    const span = Math.max(maxMs - minMs, 86400000);

    const fmt = (ms) => new Date(ms).toISOString().slice(0, 10);
    const midMs = minMs + span / 2;

    const colColor = Object.fromEntries(COLUMNS.map((c) => [c.key, c.color]));

    const container = document.createElement("div");
    container.className = "roadmap";
    container.innerHTML = `
      <div class="roadmap-header">
        <span>Zadanie (sortowane po dacie końca)</span>
        <div class="roadmap-dates">
          <span>${fmt(minMs)}</span>
          <span>${fmt(midMs)}</span>
          <span>${fmt(maxMs)}</span>
        </div>
      </div>
      ${dated.map((t) => {
        const s = Date.parse(t.startDate);
        const e = Math.max(Date.parse(t.endDate), s + 86400000 * 0.5);
        const left = ((s - minMs) / span) * 100;
        const width = Math.max(((e - s) / span) * 100, 4);
        const bg = colColor[t.status] || "#3b82f6";
        return `
          <div class="roadmap-row">
            <div class="roadmap-label" data-open="${t.id}" title="${escapeHtml(t.title)}">
              <strong>#${t.id}</strong> ${escapeHtml(t.title)}
            </div>
            <div class="roadmap-track">
              <div class="roadmap-bar" data-open="${t.id}" style="left:${left.toFixed(2)}%;width:${Math.min(width, 100 - left).toFixed(2)}%;background:${bg}">
                ${escapeHtml(t.startDate.slice(5))} → ${escapeHtml(t.endDate.slice(5))}
              </div>
            </div>
          </div>
        `;
      }).join("")}
    `;

    container.querySelectorAll("[data-open]").forEach((el) => {
      el.addEventListener("click", () => openModal(Number(el.dataset.open)));
    });

    contentEl.innerHTML = "";
    contentEl.appendChild(container);
  }

  // ===== MindNode / Mind Map View =====
  function buildMindMapTree(list) {
    const doneCount = list.filter((t) => t.status === "Done").length;
    const pct = list.length ? Math.round((doneCount / list.length) * 100) : 0;

    let groups = [];
    if (mindmapGroupBy === "status") {
      groups = COLUMNS.map((c) => ({
        id: `branch-status-${c.key}`,
        label: c.label,
        color: c.color,
        defaults: { status: c.key },
        items: list.filter((t) => t.status === c.key),
      }));
    } else if (mindmapGroupBy === "type") {
      const types = [
        { key: "Feature", label: "Funkcje (Feature)", color: "#3b82f6" },
        { key: "Task", label: "Zadania (Task)", color: "#a855f7" },
        { key: "Bug", label: "Błędy (Bug)", color: "#ef4444" },
      ];
      groups = types.map((tp) => ({
        id: `branch-type-${tp.key}`,
        label: tp.label,
        color: tp.color,
        defaults: { type: tp.key },
        items: list.filter((t) => t.type === tp.key),
      }));
    } else if (mindmapGroupBy === "priority") {
      const prios = [
        { key: "Wysoki", label: "Priorytet: Wysoki", color: "#ef4444" },
        { key: "Średni", label: "Priorytet: Średni", color: "#f59e0b" },
        { key: "Niski", label: "Priorytet: Niski", color: "#64748b" },
      ];
      groups = prios.map((p) => ({
        id: `branch-prio-${p.key}`,
        label: p.label,
        color: p.color,
        defaults: { priority: p.key },
        items: list.filter((t) => t.priority === p.key),
      }));
    } else {
      // Group by first label / module
      const labelMap = new Map();
      list.forEach((t) => {
        const key = (t.labels && t.labels.length) ? t.labels[0] : "Ogólne";
        if (!labelMap.has(key)) labelMap.set(key, []);
        labelMap.get(key).push(t);
      });
      let idx = 0;
      labelMap.forEach((items, key) => {
        groups.push({
          id: `branch-label-${key}`,
          label: key,
          color: MINDMAP_PALETTE[idx % MINDMAP_PALETTE.length],
          defaults: key === "Ogólne" ? {} : { labels: [key] },
          items,
        });
        idx++;
      });
      if (!groups.length) {
        groups.push({
          id: "branch-label-Ogólne",
          label: "Ogólne",
          color: MINDMAP_PALETTE[0],
          defaults: {},
          items: [],
        });
      }
    }

    // Helper: build nested task tree inside a branch using optional parentId
    function buildTaskSubtree(items, branchColor) {
      const byId = new Map(items.map((t) => [t.id, t]));
      const childrenMap = new Map();
      const topItems = [];

      items.forEach((t) => {
        if (t.parentId && byId.has(t.parentId) && t.parentId !== t.id) {
          if (!childrenMap.has(t.parentId)) childrenMap.set(t.parentId, []);
          childrenMap.get(t.parentId).push(t);
        } else {
          topItems.push(t);
        }
      });

      const visited = new Set();
      function toNode(t, depth) {
        if (visited.has(t.id)) return null;
        visited.add(t.id);
        const kids = (childrenMap.get(t.id) || [])
          .map((c) => toNode(c, depth + 1))
          .filter(Boolean);
        const titleLen = (t.title || "").length;
        const nodeId = `task-${t.id}`;
        const m = mindmapMedia[nodeId];
        const estHeight = (titleLen > 28 ? 88 : 74) + (m && m.image ? 114 : 0);
        return {
          id: nodeId,
          kind: "task",
          task: t,
          label: t.title,
          color: branchColor,
          depth,
          w: m && (m.emoji || m.sticker) ? 360 : 332,
          h: estHeight,
          children: kids,
        };
      }

      return topItems.map((t) => toNode(t, 2)).filter(Boolean);
    }

    const branchNodes = groups.map((g) => {
      const m = mindmapMedia[g.id];
      const extraW = (m && m.emoji ? 32 : 0) + (m && m.sticker ? 40 : 0);
      return {
        id: g.id,
        kind: "branch",
        label: g.label,
        color: g.color,
        defaults: g.defaults,
        totalItems: g.items.length,
        depth: 1,
        w: Math.min(330, Math.max(210, g.label.length * 10.5 + 88 + extraW)),
        h: 58 + (m && m.image ? 114 : 0),
        children: buildTaskSubtree(g.items, g.color),
      };
    });

    const rootMedia = mindmapMedia["root"];
    const rootExtraW = (rootMedia && rootMedia.emoji ? 32 : 0) + (rootMedia && rootMedia.sticker ? 40 : 0);
    return {
      id: "root",
      kind: "root",
      label: projectTitle,
      subtitle: `${list.length} zadań • ${pct}% gotowe`,
      color: "#3b82f6",
      depth: 0,
      w: Math.min(380, Math.max(260, projectTitle.length * 13 + 96 + rootExtraW)),
      h: 80 + (rootMedia && rootMedia.image ? 114 : 0),
      children: branchNodes,
    };
  }

  function layoutMindMapTree(root, mode) {
    const V_GAP = 14;
    const BRANCH_GAP = 26;
    const H_GAP_ROOT = 76;
    const H_GAP_CHILD = 56;

    function computeSubtreeHeight(node) {
      const collapsed = mindmapCollapsed.has(node.id);
      if (collapsed || !node.children.length) {
        node._subH = node.h + V_GAP;
        return node._subH;
      }
      let sum = 0;
      node.children.forEach((c) => {
        sum += computeSubtreeHeight(c);
      });
      node._subH = Math.max(node.h + V_GAP, sum);
      return node._subH;
    }

    root.children.forEach((b) => computeSubtreeHeight(b));

    let rightBranches = [];
    let leftBranches = [];

    if (mode === "right" || root.children.length <= 1) {
      rightBranches = [...root.children];
    } else {
      // Balanced MindNode split by subtree height
      let rightH = 0;
      let leftH = 0;
      root.children.forEach((b) => {
        if (rightH <= leftH) {
          rightBranches.push(b);
          rightH += b._subH + BRANCH_GAP;
        } else {
          leftBranches.push(b);
          leftH += b._subH + BRANCH_GAP;
        }
      });
    }

    const nodes = [];
    const edges = [];

    root.x = 0;
    root.y = 0;
    root.dir = 0;
    nodes.push(root);

    function placeSubtree(node, parentX, parentW, centerY, dir, hGap) {
      node.dir = dir;
      node.x = parentX + dir * (parentW / 2 + hGap + node.w / 2);
      node.y = centerY;
      nodes.push(node);

      const collapsed = mindmapCollapsed.has(node.id);
      if (!collapsed && node.children.length) {
        const totalH = node.children.reduce((acc, c) => acc + c._subH, 0);
        let curY = centerY - totalH / 2;
        node.children.forEach((child) => {
          const childCenterY = curY + child._subH / 2;
          placeSubtree(child, node.x, node.w, childCenterY, dir, H_GAP_CHILD);
          edges.push({
            from: node,
            to: child,
            color: child.color,
            depth: child.depth,
          });
          curY += child._subH;
        });
      }
    }

    function placeSide(branches, dir) {
      if (!branches.length) return;
      const totalH =
        branches.reduce((acc, b) => acc + b._subH, 0) +
        Math.max(0, branches.length - 1) * BRANCH_GAP;
      let curY = -totalH / 2;
      branches.forEach((b) => {
        const cy = curY + b._subH / 2;
        placeSubtree(b, root.x, root.w, cy, dir, H_GAP_ROOT);
        edges.push({
          from: root,
          to: b,
          color: b.color,
          depth: 1,
        });
        curY += b._subH + BRANCH_GAP;
      });
    }

    placeSide(rightBranches, 1);
    placeSide(leftBranches, -1);

    // Apply saved custom node positions for current grouping+layout
    const savedPos = loadMindMapPositions();
    nodes.forEach((n) => {
      const p = savedPos[n.id];
      if (p && typeof p.x === "number" && typeof p.y === "number") {
        n.x = p.x;
        n.y = p.y;
      }
    });

    function computeBounds() {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      nodes.forEach((n) => {
        minX = Math.min(minX, n.x - n.w / 2 - 40);
        maxX = Math.max(maxX, n.x + n.w / 2 + 40);
        minY = Math.min(minY, n.y - n.h / 2 - 30);
        maxY = Math.max(maxY, n.y + n.h / 2 + 30);
      });
      return { minX, maxX, minY, maxY };
    }

    return { nodes, edges, bounds: computeBounds(), computeBounds };
  }

  function getMindMapPosScope() {
    return `${mindmapGroupBy}:${mindmapLayout}`;
  }

  function loadMindMapPositions() {
    try {
      const all = JSON.parse(localStorage.getItem(MINDMAP_POS_KEY) || "{}");
      return all[getMindMapPosScope()] || {};
    } catch {
      return {};
    }
  }

  function saveMindMapPositions(nodes) {
    try {
      const all = JSON.parse(localStorage.getItem(MINDMAP_POS_KEY) || "{}");
      const map = {};
      nodes.forEach((n) => {
        map[n.id] = { x: Math.round(n.x), y: Math.round(n.y) };
      });
      all[getMindMapPosScope()] = map;
      localStorage.setItem(MINDMAP_POS_KEY, JSON.stringify(all));
    } catch (_) {}
  }

  function clearMindMapPositions() {
    try {
      const all = JSON.parse(localStorage.getItem(MINDMAP_POS_KEY) || "{}");
      delete all[getMindMapPosScope()];
      localStorage.setItem(MINDMAP_POS_KEY, JSON.stringify(all));
    } catch (_) {}
  }

  function getEdgeCoords(e) {
    const a = e.from;
    const b = e.to;
    const dir = b.x >= a.x ? 1 : -1;
    const inset = a.kind === "root" ? 4 : 0;
    const x1 = a.x + dir * (a.w / 2 - inset);
    const y1 = a.y;
    const x2 = b.x - dir * (b.w / 2);
    const y2 = b.y;
    return { x1, y1, x2, y2 };
  }

  function getEdgePathD(e, ox = 0, oy = 0) {
    const { x1, y1, x2, y2 } = getEdgeCoords(e);
    const sx1 = x1 + ox, sy1 = y1 + oy, sx2 = x2 + ox, sy2 = y2 + oy;
    const mx = (sx1 + sx2) / 2;
    return `M ${sx1} ${sy1} C ${mx} ${sy1}, ${mx} ${sy2}, ${sx2} ${sy2}`;
  }

  function exportMindMapSvg(layout) {
    const pad = 48;
    const { minX, maxX, minY, maxY } = layout.computeBounds();
    const width = Math.ceil(maxX - minX + pad * 2);
    const height = Math.ceil(maxY - minY + pad * 2);
    const ox = -minX + pad;
    const oy = -minY + pad;
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const bg = isLight ? "#f6f8fa" : "#0d1117";
    const cardBg = isLight ? "#ffffff" : "#161b22";
    const textCol = isLight ? "#1f2328" : "#e6edf3";
    const mutedCol = isLight ? "#656d76" : "#8b949e";

    const edgePaths = layout.edges
      .map((e) => {
        const sw = e.depth === 1 ? 4 : e.depth === 2 ? 2.4 : 1.8;
        return `<path d="${getEdgePathD(e, ox, oy)}" fill="none" stroke="${e.color}" stroke-width="${sw}" stroke-linecap="round" opacity="0.88"/>`;
      })
      .join("\n");

    const nodeEls = layout.nodes
      .map((n) => {
        const x = n.x + ox - n.w / 2;
        const y = n.y + oy - n.h / 2;
        const cx = n.x + ox;
        const cy = n.y + oy;
        const safeLabel = escapeHtml(n.label.length > 36 ? n.label.slice(0, 35) + "…" : n.label);
        if (n.kind === "root") {
          return `
            <rect x="${x}" y="${y}" width="${n.w}" height="${n.h}" rx="${n.h / 2}" fill="#2563eb"/>
            <text x="${cx}" y="${cy - 4}" text-anchor="middle" fill="#ffffff" font-family="-apple-system, sans-serif" font-size="14" font-weight="700">${safeLabel}</text>
            <text x="${cx}" y="${cy + 14}" text-anchor="middle" fill="#dbeafe" font-family="-apple-system, sans-serif" font-size="11">${escapeHtml(n.subtitle)}</text>
          `;
        }
        if (n.kind === "branch") {
          return `
            <rect x="${x}" y="${y}" width="${n.w}" height="${n.h}" rx="${n.h / 2}" fill="${cardBg}" stroke="${n.color}" stroke-width="2"/>
            <text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="${textCol}" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600">${safeLabel} (${n.totalItems})</text>
          `;
        }
        const doneMark = n.task.status === "Done" ? "✓ " : "";
        return `
          <rect x="${x}" y="${y}" width="${n.w}" height="${n.h}" rx="10" fill="${cardBg}" stroke="${n.color}" stroke-width="1.4"/>
          <text x="${x + 12}" y="${cy - 2}" fill="${textCol}" font-family="-apple-system, sans-serif" font-size="12" font-weight="500">${doneMark}${safeLabel}</text>
          <text x="${x + 12}" y="${cy + 14}" fill="${mutedCol}" font-family="-apple-system, sans-serif" font-size="10">#${n.task.id} • ${escapeHtml(n.task.priority)} • ${escapeHtml(n.task.type)}</text>
        `;
      })
      .join("\n");

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  ${edgePaths}
  ${nodeEls}
</svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mapa-mysli-${new Date().toISOString().slice(0, 10)}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Wyeksportowano mapę myśli (SVG)");
  }

  function renderMindMap(list) {
    ensureLivePreviewStyles();
    const tree = buildMindMapTree(list);
    const layout = layoutMindMapTree(tree, mindmapLayout);

    const previewTasks = list.filter((t) => t.url);
    if (!mindmapPreviewTaskId && previewTasks.length) {
      mindmapPreviewTaskId = previewTasks[0].id;
    }
    const activePreviewTask =
      list.find((t) => t.id === mindmapPreviewTaskId && t.url) || previewTasks[0] || null;
    if (activePreviewTask) {
      mindmapPreviewTaskId = activePreviewTask.id;
    }

    const shell = document.createElement("div");
    shell.className = "mindmap-shell";

    shell.innerHTML = `
      <div class="mindmap-toolbar">
        <div class="mindmap-controls-left">
          <span class="mindmap-control-label">Grupuj:</span>
          <select id="mm-group-select" class="select" aria-label="Grupowanie gałęzi">
            <option value="status" ${mindmapGroupBy === "status" ? "selected" : ""}>Status</option>
            <option value="type" ${mindmapGroupBy === "type" ? "selected" : ""}>Typ zadania</option>
            <option value="priority" ${mindmapGroupBy === "priority" ? "selected" : ""}>Priorytet</option>
            <option value="label" ${mindmapGroupBy === "label" ? "selected" : ""}>Etykiety / Moduły</option>
          </select>

          <span class="mindmap-control-label">Układ:</span>
          <select id="mm-layout-select" class="select" aria-label="Układ mapy myśli">
            <option value="balanced" ${mindmapLayout === "balanced" ? "selected" : ""}>MindNode (Dwustronny)</option>
            <option value="right" ${mindmapLayout === "right" ? "selected" : ""}>Drzewo (Prawo)</option>
          </select>

          <span class="mindmap-control-label">Tło:</span>
          <select id="mm-bg-select" class="select" aria-label="Tło tablicy">
            <option value="photo" ${mindmapBg === "photo" ? "selected" : ""}>🌅 Spokojny poranek (Zdjęcie)</option>
            <option value="ivory" ${mindmapBg === "ivory" ? "selected" : ""}>☁️ Jasna pracownia</option>
            <option value="sky" ${mindmapBg === "sky" ? "selected" : ""}>🌤️ Poranne niebo</option>
            <option value="sage" ${mindmapBg === "sage" ? "selected" : ""}>🌿 Ciepła szałwia</option>
            <option value="custom" ${mindmapBg === "custom" ? "selected" : ""}>🖼️ Własne zdjęcie...</option>
            <option value="dark" ${mindmapBg === "dark" ? "selected" : ""}>🌙 Ciemna siatka</option>
          </select>
          <input type="file" id="mm-bg-file" accept="image/*" hidden />

          <button type="button" id="mm-toggle-all" class="btn btn-secondary">
            ${mindmapCollapsed.size ? "Rozwiń wszystko" : "Zwiń gałęzie"}
          </button>
          <button type="button" id="mm-reset-pos" class="btn btn-secondary" title="Przywróć automatyczne wyrównanie węzłów">Wyrównaj układ</button>
        </div>

        <div class="mindmap-controls-right">
          <button type="button" id="mm-toggle-preview" class="btn ${mindmapPreviewOpen ? "btn-primary" : "btn-secondary"}" title="Pokaż lub ukryj panel miniaturek na żywo">
            🖼️ ${mindmapPreviewOpen ? "Miniaturki: WŁ" : "Miniaturki: WYŁ"}
          </button>
          <div class="mindmap-zoom-group">
            <button type="button" id="mm-zoom-out" title="Pomniejsz">−</button>
            <span class="mindmap-zoom-pct" id="mm-zoom-pct">${Math.round(mindmapTransform.scale * 100)}%</span>
            <button type="button" id="mm-zoom-in" title="Powiększ">+</button>
          </div>
          <button type="button" id="mm-fit" class="btn btn-secondary" title="Dopasuj mapę do ekranu">Dopasuj</button>
          <button type="button" id="mm-export-svg" class="btn btn-secondary" title="Pobierz wektorowy plik SVG">Eksport SVG</button>
        </div>
      </div>

      <div class="mm-workspace-row">
        <div class="mindmap-viewport ${mindmapBg === "dark" ? "bg-dark" : `bg-${mindmapBg} is-light-canvas`}" id="mm-viewport">
          <div class="mindmap-stage" id="mm-stage">
            <svg class="mindmap-edges" id="mm-edges" width="1" height="1"></svg>
            <div class="mindmap-nodes" id="mm-nodes"></div>
          </div>
          <div class="mindmap-hint">Kliknij kafelek = podgląd miniaturki na żywo • 2× klik = edytuj zadanie • Przeciągaj węzły = układ • Scroll = zoom</div>
        </div>

        <aside class="mm-preview-dock ${mindmapPreviewXl ? "is-xl" : ""} ${!mindmapPreviewOpen || !activePreviewTask ? "hidden" : ""}" id="mm-preview-dock">
          ${activePreviewTask ? `
            <div class="mm-preview-header">
              <div>
                <div class="mm-preview-title">${escapeHtml(activePreviewTask.title)}</div>
                <div class="mm-preview-url">${escapeHtml(activePreviewTask.url)}</div>
              </div>
            </div>
            <div class="mm-preview-card">
              <div class="mm-preview-bar">
                <span style="display:flex;align-items:center;gap:6px">Podgląd na żywo <span class="mm-mobile-badge">📱 Mobile-First</span></span>
                <div class="mm-preview-actions">
                  <button type="button" id="mm-prev-xl" class="${mindmapPreviewXl ? "active" : ""}" title="Powiększ miniaturkę">XL</button>
                  <button type="button" id="mm-prev-reload" title="Odśwież miniaturkę">↻</button>
                  <button type="button" id="mm-prev-full" title="Pełny ekran">⛶ Pełny</button>
                  <button type="button" id="mm-prev-edit" title="Edytuj zadanie">✎ Edytuj</button>
                  <a href="${escapeHtml(activePreviewTask.url)}" target="_blank" rel="noopener" title="Otwórz w nowej karcie">↗</a>
                </div>
              </div>
              <div class="mm-preview-dual">
                <div class="mm-preview-frame-wrap" id="mm-prev-frame-wrap" title="Desktop — pinch = zoom, 2 palce = przesuwanie, klik = pełny ekran">
                  <iframe id="mm-prev-iframe" src="${escapeHtml(activePreviewTask.url)}${mindmapPreviewReloadNonce ? (activePreviewTask.url.includes("?") ? "&" : "?") + "_r=" + mindmapPreviewReloadNonce : ""}"></iframe>
                  <div class="mm-preview-overlay"><span>💻 Desktop • ⛶ Pełny</span></div>
                </div>
                <div class="mm-preview-phone-wrap" id="mm-prev-phone-wrap" title="Podgląd telefonu (390×844) — kliknij, aby powiększyć">
                  <div class="mm-preview-phone-notch"></div>
                  <iframe id="mm-prev-phone-iframe" src="${escapeHtml(activePreviewTask.url)}${mindmapPreviewReloadNonce ? (activePreviewTask.url.includes("?") ? "&" : "?") + "_r=" + mindmapPreviewReloadNonce : ""}"></iframe>
                </div>
              </div>
            </div>
            ${activePreviewTask.body ? `<div class="mm-preview-desc">${escapeHtml(activePreviewTask.body)}</div>` : ""}
          ` : ""}
        </aside>
      </div>
    `;

    contentEl.innerHTML = "";
    contentEl.appendChild(shell);

    const togglePreviewBtn = shell.querySelector("#mm-toggle-preview");
    if (togglePreviewBtn) {
      togglePreviewBtn.addEventListener("click", () => {
        mindmapPreviewOpen = !mindmapPreviewOpen;
        render();
      });
    }
    if (activePreviewTask) {
      const xlBtn = shell.querySelector("#mm-prev-xl");
      if (xlBtn) {
        xlBtn.addEventListener("click", () => {
          mindmapPreviewXl = !mindmapPreviewXl;
          render();
        });
      }
      const reloadBtn = shell.querySelector("#mm-prev-reload");
      if (reloadBtn) {
        reloadBtn.addEventListener("click", () => {
          mindmapPreviewReloadNonce++;
          render();
        });
      }
      const fullBtn = shell.querySelector("#mm-prev-full");
      if (fullBtn) {
        fullBtn.addEventListener("click", () => openFullscreenPreview(activePreviewTask));
      }
      const frameWrap = shell.querySelector("#mm-prev-frame-wrap");
      const prevIframe = shell.querySelector("#mm-prev-iframe");
      if (frameWrap && prevIframe) {
        let pvScale = mindmapPreviewXl ? 0.51 : 0.42;
        let pvX = 0;
        let pvY = 0;
        const applyPreviewTransform = () => {
          prevIframe.style.transform = `translate(${pvX}px, ${pvY}px) scale(${pvScale})`;
        };
        applyPreviewTransform();
        frameWrap.addEventListener("wheel", (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.ctrlKey || ev.metaKey) {
            const clamped = Math.max(-45, Math.min(45, ev.deltaY));
            const factor = Math.exp(-clamped * 0.0045);
            pvScale = Math.min(1.25, Math.max(0.32, pvScale * factor));
          } else {
            pvX = Math.min(0, Math.max(-900, pvX - ev.deltaX * 0.85));
            pvY = Math.min(0, Math.max(-900, pvY - ev.deltaY * 0.85));
          }
          applyPreviewTransform();
        }, { passive: false });
        frameWrap.addEventListener("click", () => openFullscreenPreview(activePreviewTask));
      }
      const editBtn = shell.querySelector("#mm-prev-edit");
      if (editBtn) {
        editBtn.addEventListener("click", () => openModal(activePreviewTask.id));
      }
    }

    const viewport = shell.querySelector("#mm-viewport");
    const stage = shell.querySelector("#mm-stage");
    const svgEl = shell.querySelector("#mm-edges");
    const nodesEl = shell.querySelector("#mm-nodes");
    const zoomPctEl = shell.querySelector("#mm-zoom-pct");

    if (mindmapBg === "custom" && mindmapCustomBg) {
      viewport.style.backgroundImage = `url("${mindmapCustomBg}")`;
    }

    const bgSelect = shell.querySelector("#mm-bg-select");
    const bgFileInput = shell.querySelector("#mm-bg-file");
    bgSelect.addEventListener("change", (ev) => {
      const val = ev.target.value;
      if (val === "custom") {
        bgFileInput.click();
        return;
      }
      mindmapBg = val;
      localStorage.setItem(MINDMAP_BG_KEY, val);
      render();
    });
    bgFileInput.addEventListener("change", (ev) => {
      const file = ev.target.files?.[0];
      if (!file) {
        bgSelect.value = mindmapBg;
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const maxW = 1600;
          const sc = img.width > maxW ? maxW / img.width : 1;
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(img.width * sc));
          canvas.height = Math.max(1, Math.round(img.height * sc));
          canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
          try {
            const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
            mindmapCustomBg = dataUrl;
            mindmapBg = "custom";
            localStorage.setItem(MINDMAP_CUSTOM_BG_KEY, dataUrl);
            localStorage.setItem(MINDMAP_BG_KEY, "custom");
            render();
            showToast("Ustawiono własne zdjęcie tła tablicy");
          } catch {
            showToast("Zdjęcie jest za duże dla pamięci przeglądarki");
          }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
      ev.target.value = "";
    });

    // Draw organic MindNode Bézier curves + glowing directional fireflies
    const svgNS = "http://www.w3.org/2000/svg";
    layout.edges.forEach((e, idx) => {
      const dStr = getEdgePathD(e);
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", dStr);
      const depthClass = e.depth === 1 ? "mindmap-edge-depth-1" : e.depth === 2 ? "mindmap-edge-depth-2" : "mindmap-edge-depth-3";
      path.setAttribute("class", `mindmap-edge ${depthClass}`);
      path.setAttribute("stroke", e.color);
      path.setAttribute("stroke-width", e.depth === 1 ? "5.5" : e.depth === 2 ? "3.8" : "3.2");
      path.setAttribute("stroke-opacity", "0.94");
      e._pathEl = path;
      svgEl.appendChild(path);

      // Animated firefly showing flow direction (root -> module -> task)
      const firefly = document.createElementNS(svgNS, "path");
      firefly.setAttribute("d", dStr);
      firefly.setAttribute("class", "mindmap-firefly");
      firefly.style.animationDelay = `${-((idx * 0.37) % 3.2).toFixed(2)}s`;
      firefly.style.animationDuration = e.depth === 1 ? "2.6s" : "3.4s";
      e._fireflyEl = firefly;
      svgEl.appendChild(firefly);
    });

    // Helper: collect node + visible descendants for subtree dragging
    function collectSubtreeNodes(rootNode, includeKids) {
      const list = [rootNode];
      if (!includeKids) return list;
      const visibleIds = new Set(layout.nodes.map((x) => x.id));
      function walk(node) {
        if (mindmapCollapsed.has(node.id)) return;
        (node.children || []).forEach((c) => {
          if (visibleIds.has(c.id)) {
            list.push(c);
            walk(c);
          }
        });
      }
      walk(rootNode);
      return list;
    }

    let dragState = null; // { nodes, startMouseX, startMouseY, starts: [{n,x,y}], moved }
    let suppressNextClick = false;

    function updateAllEdges() {
      layout.edges.forEach((e) => {
        const dStr = getEdgePathD(e);
        if (e._pathEl) e._pathEl.setAttribute("d", dStr);
        if (e._fireflyEl) e._fireflyEl.setAttribute("d", dStr);
      });
    }

    // Draw HTML nodes
    layout.nodes.forEach((n) => {
      const el = document.createElement("div");
      n._el = el;
      el.style.left = `${n.x}px`;
      el.style.top = `${n.y}px`;
      el.style.width = `${n.w}px`;
      el.style.minHeight = `${n.h}px`;
      el.style.setProperty("--branch-color", n.color);

      el.addEventListener("mousedown", (ev) => {
        if (ev.button !== 0) return;
        if (ev.target.closest("button, input")) return;
        ev.stopPropagation();
        const moveSubtree = !ev.altKey && n.kind !== "root";
        const group = collectSubtreeNodes(n, moveSubtree);
        dragState = {
          nodes: group,
          primaryEl: el,
          startMouseX: ev.clientX,
          startMouseY: ev.clientY,
          starts: group.map((gn) => ({ n: gn, x: gn.x, y: gn.y })),
          moved: false,
        };
      });

      const sideClass = n.dir < 0 ? "side-left" : "side-right";
      const { prefix: mediaPrefix, imageHtml } = renderNodeVisualBadges(n.id);

      const openMediaEditor = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        mindmapMediaEditor = {
          nodeId: n.id,
          nodeLabel: n.label,
          tab: mindmapMediaEditor?.tab || "emoji",
        };
        render();
      };

      el.addEventListener("contextmenu", openMediaEditor);

      if (n.kind === "root") {
        el.className = "mn-node mn-node-root";
        el.title = "2× klik: nazwa projektu • Prawy klik / 🎨: emotikony, naklejki, zdjęcia";
        el.innerHTML = `
          <div class="mn-node-media-wrap">
            ${imageHtml}
            <div class="mn-node-row">
              ${mediaPrefix}
              <div>
                <div class="mn-root-title">${escapeHtml(n.label)}</div>
                <div class="mn-root-sub">${escapeHtml(n.subtitle)}</div>
              </div>
            </div>
          </div>
        `;
        el.addEventListener("dblclick", (ev) => {
          ev.stopPropagation();
          const next = prompt("Nazwa głównego węzła projektu:", projectTitle);
          if (next && next.trim()) {
            projectTitle = next.trim();
            localStorage.setItem(PROJECT_TITLE_KEY, projectTitle);
            render();
          }
        });
      } else if (n.kind === "branch") {
        el.className = "mn-node mn-node-branch";
        const hasKids = n.children.length > 0;
        const isCollapsed = mindmapCollapsed.has(n.id);
        el.innerHTML = `
          <div class="mn-node-media-wrap">
            ${imageHtml}
            <div class="mn-node-row">
              ${mediaPrefix || `<span class="mn-branch-dot"></span>`}
              <span class="mn-branch-title" title="${escapeHtml(n.label)}">${escapeHtml(n.label)}</span>
              <span class="mn-branch-count">${n.totalItems}</span>
            </div>
          </div>
        `;

        if (hasKids) {
          const foldBtn = document.createElement("button");
          foldBtn.type = "button";
          foldBtn.className = `mn-fold-btn ${sideClass}`;
          foldBtn.title = isCollapsed ? "Rozwiń gałąź" : "Zwiń gałąź";
          foldBtn.textContent = isCollapsed ? `${n.children.length}` : "−";
          foldBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            if (mindmapCollapsed.has(n.id)) mindmapCollapsed.delete(n.id);
            else mindmapCollapsed.add(n.id);
            render();
          });
          el.appendChild(foldBtn);
        }

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = `mn-add-btn ${sideClass} ${hasKids ? "" : "no-fold"}`;
        addBtn.title = `Dodaj nowe zadanie w gałęzi "${n.label}"`;
        addBtn.textContent = "+";
        addBtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          mindmapQuickAdd = { targetLabel: n.label, defaults: n.defaults || {} };
          render();
        });
        el.appendChild(addBtn);

        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (suppressNextClick) { suppressNextClick = false; return; }
          if (hasKids) {
            if (mindmapCollapsed.has(n.id)) mindmapCollapsed.delete(n.id);
            else mindmapCollapsed.add(n.id);
            render();
          }
        });
      } else {
        const t = n.task;
        const isDone = t.status === "Done";
        const hasKids = n.children.length > 0;
        const isCollapsed = mindmapCollapsed.has(n.id);
        const isPreviewActive = mindmapPreviewOpen && mindmapPreviewTaskId === t.id;
        const ownerRaw = (t.assignee || "").toLowerCase();
        const ownerKey = ownerRaw.includes("milenk")
          ? "milenka"
          : ownerRaw.includes("janek")
          ? "janek"
          : (t.id % 2 === 1 ? "milenka" : "janek");
        const ownerBadgeHtml =
          ownerKey === "milenka"
            ? `<button type="button" class="mn-comic-owner mn-comic-milenka" title="Kliknij, aby przełączyć: Milenka / Janek / Wspólne">💖 MILENKA</button>`
            : ownerKey === "janek"
            ? `<button type="button" class="mn-comic-owner mn-comic-janek" title="Kliknij, aby przełączyć: Milenka / Janek / Wspólne">⚡ JANEK</button>`
            : `<button type="button" class="mn-comic-owner mn-comic-both" title="Kliknij, aby przełączyć: Milenka / Janek / Wspólne">💥 WSPÓLNE</button>`;
        const hasSocialCampaign = Array.isArray(t.labels) && t.labels.includes("Kampania FB / Social");
        const socialBtnHtml = `<button type="button" class="mn-social-tag ${hasSocialCampaign ? "is-active" : ""}" title="Oznacz / odznacz: wymaga kampanii Facebook / Social Media">${hasSocialCampaign ? "📣 FB / SOCIAL" : "+📣 FB"}</button>`;
        el.className = `mn-node mn-node-task ${n.dir < 0 ? "dir-left" : ""} ${isDone ? "is-done" : ""} ${isPreviewActive ? "is-preview-active" : ""}`;
        el.innerHTML = `
          <div class="mn-node-media-wrap">
            ${imageHtml}
            <div class="mn-node-row">
              <button type="button" class="mn-check ${isDone ? "checked" : ""}" title="${isDone ? "Oznacz jako do zrobienia" : "Oznacz jako gotowe"}">${isDone ? "✓" : ""}</button>
              ${mediaPrefix}
              <div class="mn-task-body">
                <div class="mn-task-title" title="${escapeHtml(t.title)}">${escapeHtml(t.title)}</div>
                <div class="mn-task-meta">
                  ${ownerBadgeHtml}
                  ${socialBtnHtml}
                  <span class="mn-prio-dot mn-prio-${escapeHtml(t.priority)}" title="Priorytet: ${escapeHtml(t.priority)}"></span>
                  <span>#${t.id}</span>
                  ${t.url ? `<button type="button" class="mn-preview-pill" title="Pokaż miniaturkę na żywo">👁️ Podgląd</button><a href="${escapeHtml(t.url)}" target="_blank" rel="noopener" class="mn-open-link" style="margin-left:4px;color:#38bdf8;font-weight:700;text-decoration:none" title="Otwórz stronę ${escapeHtml(t.url)}">↗</a>` : ""}
                </div>
              </div>
            </div>
          </div>
        `;

        const socialBtnEl = el.querySelector(".mn-social-tag");
        if (socialBtnEl) {
          socialBtnEl.addEventListener("mousedown", (ev) => ev.stopPropagation());
          socialBtnEl.addEventListener("click", (ev) => {
            ev.stopPropagation();
            const target = tasks.find((x) => x.id === t.id);
            if (target) {
              if (!Array.isArray(target.labels)) target.labels = [];
              const idx = target.labels.indexOf("Kampania FB / Social");
              if (idx >= 0) {
                target.labels.splice(idx, 1);
                showToast(`Zdjęto znacznik kampanii FB/Social z #${t.id}`);
              } else {
                target.labels.push("Kampania FB / Social");
                showToast(`Oznaczono #${t.id}: 📣 Kampania FB / Social`);
              }
              saveTasks();
              render();
            }
          });
        }

        const ownerBtnEl = el.querySelector(".mn-comic-owner");
        if (ownerBtnEl) {
          ownerBtnEl.addEventListener("mousedown", (ev) => ev.stopPropagation());
          ownerBtnEl.addEventListener("click", (ev) => {
            ev.stopPropagation();
            const target = tasks.find((x) => x.id === t.id);
            if (target) {
              const cur = (target.assignee || "").toLowerCase();
              if (cur.includes("milenk")) target.assignee = "Janek";
              else if (cur.includes("janek")) target.assignee = "Wspólne";
              else target.assignee = "Milenka";
              saveTasks();
              render();
            }
          });
        }

        const previewPillEl = el.querySelector(".mn-preview-pill");
        if (previewPillEl) {
          previewPillEl.addEventListener("mousedown", (ev) => ev.stopPropagation());
          previewPillEl.addEventListener("click", (ev) => {
            ev.stopPropagation();
            mindmapPreviewTaskId = t.id;
            mindmapPreviewOpen = true;
            render();
          });
        }

        const openLinkEl = el.querySelector(".mn-open-link");
        if (openLinkEl) {
          openLinkEl.addEventListener("mousedown", (ev) => ev.stopPropagation());
          openLinkEl.addEventListener("click", (ev) => ev.stopPropagation());
        }

        el.querySelector(".mn-check").addEventListener("click", (ev) => {
          ev.stopPropagation();
          const target = tasks.find((x) => x.id === t.id);
          if (target) {
            target.status = target.status === "Done" ? "Todo" : "Done";
            saveTasks();
            render();
            showToast(target.status === "Done" ? `Ukończono #${t.id}` : `Przywrócono #${t.id}`);
          }
        });

        if (hasKids) {
          const foldBtn = document.createElement("button");
          foldBtn.type = "button";
          foldBtn.className = `mn-fold-btn ${sideClass}`;
          foldBtn.title = isCollapsed ? "Rozwiń podzadania" : "Zwiń podzadania";
          foldBtn.textContent = isCollapsed ? `${n.children.length}` : "−";
          foldBtn.addEventListener("click", (ev) => {
            ev.stopPropagation();
            if (mindmapCollapsed.has(n.id)) mindmapCollapsed.delete(n.id);
            else mindmapCollapsed.add(n.id);
            render();
          });
          el.appendChild(foldBtn);
        }

        const addSubBtn = document.createElement("button");
        addSubBtn.type = "button";
        addSubBtn.className = `mn-add-btn ${sideClass} ${hasKids ? "" : "no-fold"}`;
        addSubBtn.title = `Dodaj podzadanie do #${t.id}`;
        addSubBtn.textContent = "+";
        addSubBtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          mindmapQuickAdd = {
            targetLabel: `Podzadanie dla #${t.id}`,
            defaults: {
              parentId: t.id,
              status: t.status,
              type: t.type,
              priority: t.priority,
              labels: [...(t.labels || [])],
            },
          };
          render();
        });
        el.appendChild(addSubBtn);

        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (suppressNextClick) { suppressNextClick = false; return; }
          if (t.url) {
            mindmapPreviewTaskId = t.id;
            mindmapPreviewOpen = true;
            render();
          } else {
            openModal(t.id);
          }
        });
        el.addEventListener("dblclick", (ev) => {
          ev.stopPropagation();
          openModal(t.id);
        });
      }

      const mediaBtn = document.createElement("button");
      mediaBtn.type = "button";
      mediaBtn.className = "mn-media-btn";
      mediaBtn.title = "Dodaj emotikonę, naklejkę lub zdjęcie";
      mediaBtn.textContent = "🎨";
      mediaBtn.addEventListener("click", openMediaEditor);
      el.appendChild(mediaBtn);

      nodesEl.appendChild(el);
    });

    // MindNode Visual Media Popover (Emoji / Stickers / Images)
    if (mindmapMediaEditor) {
      const { nodeId, nodeLabel, tab } = mindmapMediaEditor;
      const curMedia = mindmapMedia[nodeId] || {};
      const pop = document.createElement("div");
      pop.className = "mm-media-popover";
      pop.addEventListener("mousedown", (ev) => ev.stopPropagation());

      let bodyHtml = "";
      if (tab === "emoji") {
        bodyHtml = `
          <div class="mm-emoji-grid">
            ${MINDMAP_EMOJIS.map((em) => `<button type="button" class="mm-emoji-item ${curMedia.emoji === em ? "selected" : ""}" data-emoji="${em}">${em}</button>`).join("")}
          </div>
          <div style="display:flex;gap:6px">
            <input type="text" id="mm-custom-emoji" class="input" style="flex:1" placeholder="Lub wklej własną emotikonę..." value="${escapeHtml(curMedia.emoji || "")}" />
            <button type="button" id="mm-apply-emoji" class="btn btn-primary">OK</button>
          </div>
        `;
      } else if (tab === "sticker") {
        bodyHtml = `
          <div class="mm-sticker-grid">
            ${MINDMAP_STICKERS.map((s) => `
              <button type="button" class="mm-sticker-item ${curMedia.sticker === s.id ? "selected" : ""}" data-sticker="${s.id}">
                <span class="mn-sticker-badge" style="background:${s.bg}">${s.svg}</span>
                <span>${escapeHtml(s.label)}</span>
              </button>
            `).join("")}
          </div>
        `;
      } else {
        bodyHtml = `
          ${curMedia.image ? `<img class="mm-image-preview" src="${escapeHtml(curMedia.image)}" alt="Podgląd" />` : ""}
          <label class="mm-image-drop">
            <strong>📷 Wybierz zdjęcie z dysku</strong>
            <span>PNG, JPG, WebP — automatyczna optymalizacja offline</span>
            <input type="file" id="mm-image-file" accept="image/*" hidden />
          </label>
          <div style="display:flex;gap:6px">
            <input type="url" id="mm-image-url" class="input" style="flex:1" placeholder="Lub wklej link URL do zdjęcia..." value="${curMedia.image && !curMedia.image.startsWith("data:") ? escapeHtml(curMedia.image) : ""}" />
            <button type="button" id="mm-apply-url" class="btn btn-primary">Dodaj</button>
          </div>
        `;
      }

      pop.innerHTML = `
        <div class="mm-media-header">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:255px">🎨 ${escapeHtml(nodeLabel)}</span>
          <button type="button" id="mm-media-close" class="btn btn-ghost icon-only" style="width:26px;height:26px;font-size:13px">✕</button>
        </div>
        <div class="mm-media-tabs">
          <button type="button" class="mm-media-tab ${tab === "emoji" ? "active" : ""}" data-mtab="emoji">Emotikony</button>
          <button type="button" class="mm-media-tab ${tab === "sticker" ? "active" : ""}" data-mtab="sticker">Naklejki</button>
          <button type="button" class="mm-media-tab ${tab === "image" ? "active" : ""}" data-mtab="image">Zdjęcie</button>
        </div>
        <div class="mm-media-body">${bodyHtml}</div>
        <div class="mm-media-footer">
          <button type="button" id="mm-media-clear" class="btn btn-ghost" style="font-size:12px;color:var(--danger)">Wyczyść grafikę</button>
          <button type="button" id="mm-media-done" class="btn btn-secondary" style="font-size:12px">Gotowe</button>
        </div>
      `;

      pop.querySelector("#mm-media-close").addEventListener("click", () => {
        mindmapMediaEditor = null;
        render();
      });
      pop.querySelector("#mm-media-done").addEventListener("click", () => {
        mindmapMediaEditor = null;
        render();
      });
      pop.querySelector("#mm-media-clear").addEventListener("click", () => {
        clearNodeMedia(nodeId);
        showToast("Usunięto grafikę węzła");
      });
      pop.querySelectorAll("[data-mtab]").forEach((btn) => {
        btn.addEventListener("click", () => {
          mindmapMediaEditor = { ...mindmapMediaEditor, tab: btn.dataset.mtab };
          render();
        });
      });

      if (tab === "emoji") {
        pop.querySelectorAll("[data-emoji]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const em = btn.dataset.emoji;
            setNodeMedia(nodeId, { emoji: curMedia.emoji === em ? "" : em });
          });
        });
        pop.querySelector("#mm-apply-emoji").addEventListener("click", () => {
          const val = pop.querySelector("#mm-custom-emoji").value.trim();
          setNodeMedia(nodeId, { emoji: val });
        });
      } else if (tab === "sticker") {
        pop.querySelectorAll("[data-sticker]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const sid = btn.dataset.sticker;
            setNodeMedia(nodeId, { sticker: curMedia.sticker === sid ? "" : sid });
          });
        });
      } else {
        pop.querySelector("#mm-image-file").addEventListener("change", async (ev) => {
          const file = ev.target.files?.[0];
          if (!file) return;
          try {
            const dataUrl = await compressImageFile(file);
            setNodeMedia(nodeId, { image: dataUrl });
            showToast("Dodano zdjęcie do węzła");
          } catch {
            showToast("Nie udało się wczytać zdjęcia");
          }
        });
        pop.querySelector("#mm-apply-url").addEventListener("click", () => {
          const url = pop.querySelector("#mm-image-url").value.trim();
          setNodeMedia(nodeId, { image: url });
          if (url) showToast("Dodano grafikę do węzła");
        });
      }

      shell.appendChild(pop);
    }

    // Quick-add floating popover
    if (mindmapQuickAdd) {
      const qa = document.createElement("form");
      qa.className = "mindmap-quickadd";
      qa.innerHTML = `
        <span class="mindmap-control-label">Nowy węzeł (${escapeHtml(mindmapQuickAdd.targetLabel)}):</span>
        <input type="text" class="input" id="mm-quick-input" placeholder="Wpisz tytuł i naciśnij Enter..." required />
        <button type="submit" class="btn btn-primary">Dodaj</button>
        <button type="button" class="btn btn-ghost" id="mm-quick-cancel">Anuluj</button>
      `;
      qa.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const title = qa.querySelector("#mm-quick-input").value.trim();
        if (!title) return;
        const nextId = tasks.length ? Math.max(...tasks.map((x) => x.id)) + 1 : 1;
        const d = mindmapQuickAdd.defaults || {};
        tasks.push({
          id: nextId,
          title,
          body: "",
          status: d.status || "Todo",
          priority: d.priority || "Średni",
          type: d.type || "Task",
          labels: d.labels ? [...d.labels] : [],
          assignee: "teraj-stack",
          startDate: new Date().toISOString().slice(0, 10),
          endDate: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10),
          url: "",
          ...(d.parentId ? { parentId: d.parentId } : {}),
        });
        mindmapQuickAdd = null;
        saveTasks();
        render();
        showToast(`Dodano węzeł #${nextId} na mapie myśli`);
      });
      qa.querySelector("#mm-quick-cancel").addEventListener("click", () => {
        mindmapQuickAdd = null;
        render();
      });
      viewport.appendChild(qa);
      requestAnimationFrame(() => qa.querySelector("#mm-quick-input")?.focus());
    }

    function applyTransform() {
      stage.style.transform = `translate(${mindmapTransform.x}px, ${mindmapTransform.y}px) scale(${mindmapTransform.scale})`;
      zoomPctEl.textContent = `${Math.round(mindmapTransform.scale * 100)}%`;
    }

    function fitToViewport(allowZoomOut = false) {
      const rect = viewport.getBoundingClientRect();
      const vw = rect.width || 1100;
      const vh = rect.height || 620;
      const { minX, maxX, minY, maxY } = layout.computeBounds();
      const bw = Math.max(200, maxX - minX);
      const bh = Math.max(150, maxY - minY);
      const fitScale = Math.min(1.15, Math.max(0.32, Math.min((vw - 70) / bw, (vh - 70) / bh)));
      // On initial load keep scale readable (at least 0.95 = 95%) instead of shrinking to 32%
      const scale = allowZoomOut ? fitScale : Math.max(0.95, fitScale);
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      mindmapTransform.scale = scale;
      mindmapTransform.x = vw / 2 - cx * scale;
      mindmapTransform.y = vh / 2 - cy * scale;
      mindmapTransform.initialized = true;
      applyTransform();
    }

    if (!mindmapTransform.initialized) {
      requestAnimationFrame(() => fitToViewport(false));
    } else {
      applyTransform();
    }

    // Panning & Node Dragging
    let isPanning = false;
    let panStartX = 0;
    let panStartY = 0;
    let startTx = 0;
    let startTy = 0;

    viewport.addEventListener("mousedown", (ev) => {
      if (ev.target.closest(".mn-node, .mindmap-quickadd")) return;
      isPanning = true;
      viewport.classList.add("panning");
      panStartX = ev.clientX;
      panStartY = ev.clientY;
      startTx = mindmapTransform.x;
      startTy = mindmapTransform.y;
    });

    if (renderMindMap._cleanup) renderMindMap._cleanup();

    const onMouseMove = (ev) => {
      if (dragState) {
        const dxScreen = ev.clientX - dragState.startMouseX;
        const dyScreen = ev.clientY - dragState.startMouseY;
        if (!dragState.moved && Math.hypot(dxScreen, dyScreen) < 5) return;
        if (!dragState.moved) {
          dragState.moved = true;
          dragState.primaryEl.classList.add("is-dragging");
        }
        const dx = dxScreen / mindmapTransform.scale;
        const dy = dyScreen / mindmapTransform.scale;
        dragState.starts.forEach(({ n, x, y }) => {
          n.x = x + dx;
          n.y = y + dy;
          if (n._el) {
            n._el.style.left = `${n.x}px`;
            n._el.style.top = `${n.y}px`;
          }
        });
        updateAllEdges();
        return;
      }
      if (!isPanning) return;
      mindmapTransform.x = startTx + (ev.clientX - panStartX);
      mindmapTransform.y = startTy + (ev.clientY - panStartY);
      applyTransform();
    };
    const onMouseUp = () => {
      if (dragState) {
        dragState.primaryEl.classList.remove("is-dragging");
        if (dragState.moved) {
          suppressNextClick = true;
          setTimeout(() => { suppressNextClick = false; }, 120);
          saveMindMapPositions(layout.nodes);
        }
        dragState = null;
        return;
      }
      if (!isPanning) return;
      isPanning = false;
      viewport.classList.remove("panning");
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    renderMindMap._cleanup = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    // Smooth macOS trackpad navigation:
    // - Two-finger scroll (!ctrlKey) = smooth pan (przesuwanie drzewka)
    // - Pinch-to-zoom (ctrlKey / metaKey) = gentle, smoothed zoom
    let targetTx = mindmapTransform.x;
    let targetTy = mindmapTransform.y;
    let targetScale = mindmapTransform.scale;
    let smoothRaf = null;

    function startSmoothLoop() {
      if (smoothRaf) return;
      const step = () => {
        const dx = targetTx - mindmapTransform.x;
        const dy = targetTy - mindmapTransform.y;
        const ds = targetScale - mindmapTransform.scale;
        if (Math.abs(dx) < 0.35 && Math.abs(dy) < 0.35 && Math.abs(ds) < 0.0008) {
          mindmapTransform.x = targetTx;
          mindmapTransform.y = targetTy;
          mindmapTransform.scale = targetScale;
          applyTransform();
          smoothRaf = null;
          return;
        }
        mindmapTransform.x += dx * 0.24;
        mindmapTransform.y += dy * 0.24;
        mindmapTransform.scale += ds * 0.22;
        applyTransform();
        smoothRaf = requestAnimationFrame(step);
      };
      smoothRaf = requestAnimationFrame(step);
    }

    viewport.addEventListener(
      "wheel",
      (ev) => {
        ev.preventDefault();
        if (!smoothRaf) {
          targetTx = mindmapTransform.x;
          targetTy = mindmapTransform.y;
          targetScale = mindmapTransform.scale;
        }
        if (ev.ctrlKey || ev.metaKey) {
          // Pinch-to-zoom: gentle sensitivity + damped motion
          const rect = viewport.getBoundingClientRect();
          const mx = ev.clientX - rect.left;
          const my = ev.clientY - rect.top;
          const clampedDelta = Math.max(-45, Math.min(45, ev.deltaY));
          const factor = Math.exp(-clampedDelta * 0.0038);
          const prevScale = targetScale;
          const nextScale = Math.min(2.2, Math.max(0.28, prevScale * factor));
          const ratio = nextScale / prevScale;
          targetTx = mx - (mx - targetTx) * ratio;
          targetTy = my - (my - targetTy) * ratio;
          targetScale = nextScale;
        } else {
          // Two-finger scroll: smooth panning of the tree
          targetTx -= ev.deltaX * 0.85;
          targetTy -= ev.deltaY * 0.85;
        }
        startSmoothLoop();
      },
      { passive: false }
    );

    // Toolbar controls
    shell.querySelector("#mm-group-select").addEventListener("change", (ev) => {
      mindmapGroupBy = ev.target.value;
      mindmapCollapsed.clear();
      mindmapTransform.initialized = false;
      render();
    });

    shell.querySelector("#mm-layout-select").addEventListener("change", (ev) => {
      mindmapLayout = ev.target.value;
      mindmapTransform.initialized = false;
      render();
    });

    shell.querySelector("#mm-toggle-all").addEventListener("click", () => {
      if (mindmapCollapsed.size) {
        mindmapCollapsed.clear();
      } else {
        tree.children.forEach((b) => mindmapCollapsed.add(b.id));
      }
      mindmapTransform.initialized = false;
      render();
    });

    shell.querySelector("#mm-reset-pos").addEventListener("click", () => {
      clearMindMapPositions();
      mindmapTransform.initialized = false;
      render();
      showToast("Wyrównano układ mapy myśli");
    });

    shell.querySelector("#mm-zoom-in").addEventListener("click", () => {
      const rect = viewport.getBoundingClientRect();
      const cx = rect.width / 2, cy = rect.height / 2;
      const next = Math.min(2.2, mindmapTransform.scale * 1.18);
      const r = next / mindmapTransform.scale;
      mindmapTransform.x = cx - (cx - mindmapTransform.x) * r;
      mindmapTransform.y = cy - (cy - mindmapTransform.y) * r;
      mindmapTransform.scale = next;
      applyTransform();
    });

    shell.querySelector("#mm-zoom-out").addEventListener("click", () => {
      const rect = viewport.getBoundingClientRect();
      const cx = rect.width / 2, cy = rect.height / 2;
      const next = Math.max(0.25, mindmapTransform.scale * 0.85);
      const r = next / mindmapTransform.scale;
      mindmapTransform.x = cx - (cx - mindmapTransform.x) * r;
      mindmapTransform.y = cy - (cy - mindmapTransform.y) * r;
      mindmapTransform.scale = next;
      applyTransform();
    });

    shell.querySelector("#mm-fit").addEventListener("click", fitToViewport);
    shell.querySelector("#mm-export-svg").addEventListener("click", () => exportMindMapSvg(layout));
  }

  function render() {
    const list = getFilteredTasks();
    renderStats(list);
    if (currentView === "board") renderBoard(list);
    else if (currentView === "table") renderTable(list);
    else if (currentView === "roadmap") renderRoadmap(list);
    else renderMindMap(list);
  }

  function openModal(id = null) {
    const isNew = id === null;
    const t = isNew
      ? {
          id: "",
          title: "",
          status: "Todo",
          priority: "Średni",
          type: "Task",
          startDate: new Date().toISOString().slice(0, 10),
          endDate: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10),
          assignee: "teraj-stack",
          labels: [],
          body: "",
          url: "",
        }
      : tasks.find((x) => x.id === id);

    if (!t) return;

    document.getElementById("modal-title").textContent = isNew ? "Nowe zadanie" : `Zadanie #${t.id}`;
    document.getElementById("field-id").value = t.id;
    document.getElementById("field-title").value = t.title;
    document.getElementById("field-status").value = t.status;
    document.getElementById("field-priority").value = t.priority;
    document.getElementById("field-type").value = t.type;
    document.getElementById("field-start").value = t.startDate || "";
    document.getElementById("field-end").value = t.endDate || "";
    document.getElementById("field-assignee").value = t.assignee || "";
    document.getElementById("field-labels").value = (t.labels || []).join(", ");
    document.getElementById("field-body").value = t.body || "";

    const delBtn = document.getElementById("btn-delete-task");
    delBtn.classList.toggle("hidden", isNew);

    const ghLink = document.getElementById("field-github-link");
    if (t.url) {
      ghLink.href = t.url;
      ghLink.classList.remove("hidden");
    } else {
      ghLink.classList.add("hidden");
    }

    modalEl.classList.remove("hidden");
    document.getElementById("field-title").focus();
  }

  function closeModal() {
    modalEl.classList.add("hidden");
  }

  // Event bindings
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentView = btn.dataset.view;
      render();
    });
  });

  document.getElementById("filter-search").addEventListener("input", (e) => {
    filters.search = e.target.value;
    render();
  });
  document.getElementById("filter-type").addEventListener("change", (e) => {
    filters.type = e.target.value;
    render();
  });
  document.getElementById("filter-priority").addEventListener("change", (e) => {
    filters.priority = e.target.value;
    render();
  });

  document.getElementById("btn-new-task").addEventListener("click", () => openModal(null));
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("btn-cancel-modal").addEventListener("click", closeModal);
  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeModal();
  });

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawId = document.getElementById("field-id").value;
    const labels = document
      .getElementById("field-labels")
      .value.split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      title: document.getElementById("field-title").value.trim(),
      status: document.getElementById("field-status").value,
      priority: document.getElementById("field-priority").value,
      type: document.getElementById("field-type").value,
      startDate: document.getElementById("field-start").value,
      endDate: document.getElementById("field-end").value,
      assignee: document.getElementById("field-assignee").value.trim(),
      labels,
      body: document.getElementById("field-body").value.trim(),
    };

    if (rawId) {
      const idx = tasks.findIndex((x) => x.id === Number(rawId));
      if (idx !== -1) tasks[idx] = { ...tasks[idx], ...payload };
      showToast(`Zapisano zmiany w #${rawId}`);
    } else {
      const nextId = tasks.length ? Math.max(...tasks.map((x) => x.id)) + 1 : 1;
      tasks.push({ id: nextId, url: "", ...payload });
      showToast(`Dodano zadanie #${nextId}`);
    }

    saveTasks();
    closeModal();
    render();
  });

  document.getElementById("btn-delete-task").addEventListener("click", () => {
    const id = Number(document.getElementById("field-id").value);
    tasks = tasks.filter((x) => x.id !== id);
    saveTasks();
    closeModal();
    render();
    showToast(`Usunięto zadanie #${id}`);
  });

  document.getElementById("btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `managing-work-offline-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Wyeksportowano kopię JSON");
  });

  document.getElementById("input-import").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (!Array.isArray(imported)) throw new Error("Nieprawidłowy format");
        tasks = imported;
        saveTasks();
        render();
        showToast(`Zaimportowano ${tasks.length} zadań`);
      } catch {
        showToast("Błąd: nieprawidłowy plik JSON");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (!confirm("Przywrócić oryginalne 21 zadań z repozytorium GitHub?")) return;
    tasks = structuredClone(window.INITIAL_TASKS || []);
    saveTasks();
    render();
    showToast("Przywrócono dane początkowe");
  });

  // Theme
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.getElementById("btn-theme").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  });

  render();
  syncFromDiskIfAvailable();
})();
