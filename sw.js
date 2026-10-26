/* Service worker : fait fonctionner l'application sans réseau.
   POUR PUBLIER UNE MISE À JOUR : modifier index.html, puis CHANGER le numéro ci-dessous (v1 -> v2...). */
var V = "aai-rapport-v3";
var FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-512-maskable.png", "apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Réponse immédiate depuis le cache (marche hors-ligne) ; en parallèle, mise à jour du cache si le réseau répond. */
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET") return;
  var u = new URL(r.url);
  if (u.origin !== location.origin) return;
  e.respondWith(caches.open(V).then(function (c) {
    return c.match(r, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && res.ok) c.put(r, res.clone()); return res; }).catch(function () { return null; });
      if (hit) { e.waitUntil(net); return hit; }
      return net.then(function (res) {
        if (res) return res;
        return r.mode === "navigate" ? c.match("index.html") : Response.error();
      });
    });
  }));
});
