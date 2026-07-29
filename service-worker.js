const CACHE_NAME = "lifeext-cache-v1";


const CACHE_FILES = [

    "./",

    "./index.html",

    "./favorites.html",

    "./manifest.json",

    "./css/style.css",


    "./javascript/quotes.js",

    "./javascript/script.js",

    "./javascript/search.js",

    "./javascript/favorite.js",

    "./javascript/notification.js",

    "./javascript/api.js",


    "./icons/icon-192.png",

    "./icons/icon-512.png"

];



// 설치

self.addEventListener("install", (event) => {


    event.waitUntil(

        caches.open(CACHE_NAME)

            .then((cache) => {

                return cache.addAll(CACHE_FILES);

            })

    );


});




// 활성화

self.addEventListener("activate", (event) => {


    event.waitUntil(

        caches.keys()

            .then((cacheNames) => {


                return Promise.all(

                    cacheNames.map((cacheName) => {


                        if (cacheName !== CACHE_NAME) {


                            return caches.delete(cacheName);


                        }


                    })

                );


            })

    );


});




// 요청 처리

self.addEventListener("fetch", (event) => {


    event.respondWith(


        caches.match(event.request)

            .then((response) => {


                if (response) {


                    return response;


                }


                return fetch(event.request);


            })


    );


});