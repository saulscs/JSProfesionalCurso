const VERSION = "v1"

self.addEventListener('install', e => {
     e.waitUntil(precache())
})

self.addEventListener('fetch', e => {
     const request = e.request;
     //get
     if(request.method != "GET"){
          return;
     }

     //Buscar en cache
     e.respondWith(cachedResponse(request));

     //Actualizar el cache
     e.waitUntil(updatedCache(request)); 
})
 
async function precache () {
     const cache = await caches.open(VERSION);
     return cache.addAll([
          '/',
          '/assets/index.js',
          '/assets/MediaPlayer.js',
          '/assets/plugins/AutoPause.js',
          '/assets/plugins/AutoPlay.js',
          '/assets/index.css',
          '/assets/BigBuckBunny.mp4',
     ])
}

async function cachedResponse(request){
     const cache = await caches.open(VERSION);
     const response = await cache.match(request);
     return response || fetch(request)
}

async function updatedCache(request){
     const cache = await caches.open(VERSION);
     const response = await fetch(request);
     return cache.put(request, response);
}