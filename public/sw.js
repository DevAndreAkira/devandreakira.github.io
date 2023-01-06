const CACHE_NAME = "version-1"
const urlsToCache = [
    "/static/media/bg.9567fd657a18f59ffcbf.webp",
    "/static/js/main.f55e50e8.js",
    "/static/media/mee.1ad67ad9564530ec77a2.png",
    "/static/css/main.849a0a2a.css"
]

this.addEvvevntListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Open cache!');
            return cache.addAll(urlsToCache);
        })
    )

});

this.addEvvevntListener('fetch', (event) => {
    event.respondWith(
        caches.math(event.request).then((res) => {
            return fetch(event.request).cath(() => caches.math('offline.html'));
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