self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open("v1")
            .then((cache) =>
                cache.addAll([
                    '/',
                    '/index.html',
                    "/static/media/bg.9567fd657a18f59ffcbf.webp",
                    "/static/js/main.f55e50e8.js",
                    "/static/media/mee.1ad67ad9564530ec77a2.png",
                    "/static/css/main.849a0a2a.css"
                ])
            )
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // caches.match() always resolves
            // but in case of success response will have value
            if (response !== undefined) {
                return response;
            } else {
                return fetch(event.request)
                    .then((response) => {
                        // response may be used only once
                        // we need to save clone to put one copy in cache
                        // and serve second one
                        let responseClone = response.clone();

                        caches.open("v1").then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    })
                    .catch(() => caches.match("/gallery/myLittleVader.jpg"));
            }
        })
    );
});


// const CACHE_NAME = "version-1"
// const urlsToCache = [
//     '/',
//     '/index.html',
//     "/static/media/bg.9567fd657a18f59ffcbf.webp",
//     "/static/js/main.f55e50e8.js",
//     "/static/media/mee.1ad67ad9564530ec77a2.png",
//     "/static/css/main.849a0a2a.css"
// ]

// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//             console.log('Open cache!');
//             return cache.addAll(urlsToCache);
//         })
//     )

// });

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((res) => {
//             return fetch(event.request).catch(() => caches.match('offline.html'));
//         })
//     )

// });

// this.addEventListener('activate', (event) => {
//     const cacheWhiteList = []
//     cacheWhiteList.push(CACHE_NAME)
//     event.waitUntil(caches.keys().then((cacheNames) => Promise.all(
//         cacheNames.map((cacheName) => {
//             if (!cacheWhiteList.includes(cacheName)) {
//                 return caches.delete(cacheName);
//             }
//         })
//     )
//     ))
// })

// self.addEventListener('install', event => {
//     console.log('Service Worker installing.');
// });

// self.addEventListener('activate', event => {
//     console.log('Service Worker activating.');
// });