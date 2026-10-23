self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// A basic fetch listener is required by Chrome to pass the PWA install check
self.addEventListener('fetch', (e) => {});
