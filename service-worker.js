
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("radio-cache-v1").then(cache => {
      return cache.addAll([
        "./radio_icla_templo_belen_lazy_sin_botones_visibles_abajo.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
