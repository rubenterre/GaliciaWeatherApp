// Asignar nombre y version de la caché

const CACHE_NAME = 'v1_cache_ruben_terre_pwa';

// Ficheros a cachear en la aplicación

var urlsToCache = [
    './',
    './css/styles.css',
    './images/Favicom/favicon.png',
    './images/Favicom/favicon_512x512.png',
    './images/Favicom/favicon_152x152.png',
    './images/Favicom/favicon_120x120.png',
    './images/Favicom/favicon_76x76.png',
    './images/Favicom/favicon_60x60.png',
];

// Evento install
//Que la web funcione sin conexiÓN
//instalación del service worker y guardar en caché los recursosestáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                        .then(() => {
                            self.skipWaiting();
                        })

            })
            .catch(err => {
                console.log( 'No se ha registrado el caché', err)
            })
    )
})


// Evento activate

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cacheName) === 1){
                        // Borrar elementos que no necesita
                        return caches.delete(cacheName);
                    }
                })
            )
        })
        .then(
            ()=>{
                //Activar cache

        self.clientInformation.claim();
    }
        )
    )
});

// Evento fetch

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                // devuelvo datos desde caché
                return res;
            }
            return fetch(e.request);
        })
    )
});