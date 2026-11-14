/* Jidr service worker.
   - index.html, course.js, jidr-audio.json: network first (a new upload shows up the next time you open the app online),
     falling back to the saved copy when offline or the network is slow.
   - everything else (icons, fonts, manifest): saved on first install, served from the phone.
   If you ever change an icon, a font or the manifest, bump CACHE so phones fetch the new files. */
const CACHE = "jidr-static-v2";
const ASSETS = [
  "index.html",
  "course.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "fonts/fonts.css",
  "fonts/amiri-arabic-400-normal.woff2",
  "fonts/amiri-arabic-700-normal.woff2",
  "fonts/onest-latin-wght-normal.woff2",
  "fonts/onest-latin-ext-wght-normal.woff2",
  "fonts/onest-cyrillic-wght-normal.woff2",
  "fonts/unbounded-latin-wght-normal.woff2",
  "fonts/unbounded-cyrillic-wght-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const fresh = req.mode === "navigate" || /\/(course\.js|jidr-audio\.json)$/.test(url.pathname);
  if (fresh) {
    const keyName = url.pathname.split("/").pop() || "index.html";
    const network = fetch(req, { cache: "no-cache" }).then(res => {
      if (!res.ok) throw new Error("bad status");
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(keyName, copy));
      return res;
    });
    const timeout = new Promise((_, reject) => setTimeout(reject, 4000));
    e.respondWith(
      Promise.race([network, timeout]).catch(() => caches.match(keyName).then(hit => hit || network))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
