console.log("Service worker startups.");

self.addEventListener('install', function(event) {
  console.log("Service worker installed.");
});

self.addEventListener('activate', function(event) {
  console.log("Service worker activated.");
});

self.addEventListener('fetch', function(event) {
  event.respondWith(new Response(navigator.userAgent));
});
