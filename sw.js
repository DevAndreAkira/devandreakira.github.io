const CACHE_NAME = "version"
const urlsToCache = ["index.html", "offline.html"]

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

// self.addEventListener('install', event => {
//     console.log('Service Worker installing.');
// });

// self.addEventListener('activate', event => {
//     console.log('Service Worker activating.');
// });