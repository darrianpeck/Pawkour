//makes appilcation installable
//service workers only get installed once in their lifecyle, if you refresh it will not install a second time
//if any changes are made to this file, it will need to be reloaded
self.addEventListener("install", e => {
    //console.log("Install!");        //fires off whenever the service worker is being installed, will only see this once and when I refresh it will go away because the SW will only install once!!
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/doghouseIcon120.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    //console.log(`Intercepting fetch request for: ${e.request.url}`);      //stored in cache when installed so it is able to load when user is offline
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);        // || = 'or'
        })
    );
});