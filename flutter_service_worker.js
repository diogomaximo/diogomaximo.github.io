'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1a6155a5250d8e827b8ceef46715c838",
"/": "1a6155a5250d8e827b8ceef46715c838",
"main.dart.js": "30147f62fa5a96b541502435444092d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32a3b0c13ccc2fd6d6645fefe0a28714",
"assets/LICENSE": "6f91ad674328670160bc955ba992ccf9",
"assets/AssetManifest.json": "2c33796f95111d497f2560eff5ca2d53",
"assets/FontManifest.json": "92f8fe616884b539a8c9a6b2ae33b130",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/loading.gif": "262a150360ab4ff3379879f702f99617",
"assets/assets/lives.json": "b4daa9c1a3000389ad6b7f7cf7df258f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
