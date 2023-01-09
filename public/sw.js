const CACHE_NAME = "version-1.1"
const urlsToCache = [
    '/',
    '/index.html',
    "/static/media/bg.9567fd657a18f59ffcbf.webp",
    "/static/media/mee.a3fc03ed48d4a6483210.png"
]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Open cache!');
            return cache.addAll(urlsToCache);
        })
    )
});

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return fetch(event.request).catch(() => caches.match('offline.html'));
        })
    )

});

this.addEventListener('activate', (event) => {
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
            if (!cacheWhiteList.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
    )
    ))
})

// self.addEventListener('install', event => {
//     console.log('Service Worker installing.');
// });

// self.addEventListener('activate', event => {
//     console.log('Service Worker activating.');
// });