const cacheName = 'v2';

//call install event
self.addEventListener('install', event => {
    console.log('service worker: Installed');
})

//call activte event
self.addEventListener('activate', event =>{
    console.log('service worker: Activated');
    //Remove unwanted caches
    event.waitUntil(
        caches.keys()
        .then(cachedNames => {
            return Promise.all(
                cachedNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})
//call fetch event
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching');
    event.respondWith(
        fetch(event.request)
        .then(res => {
            //make clone of resonse
            const resClone = res.clone();
            //Open cache
            caches
                .open(cacheName)
                .then(cache => {
                    //Add response to cache
                    cache.put(event.request, resClone);
            });
            return res;
        }).catch(err => caches.match(event.request))
            .then(res => res)
    );
});