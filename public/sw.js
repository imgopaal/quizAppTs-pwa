let cacheData="appV1"
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/main.chunk.js",
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                // 'https://opentdb.com/api.php?amount=easy&difficulty=easy&type=multiple',
                '/static/media/backGround.66480487.jpg'

            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp
            }
        })
    )
})