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
                '/static/media/backGround.1af9117d.jpg',
                // 'https://opentdb.com/api.php?amount=${amount}&difficulty=&{difficulty}&type=multiple',
                'https://fonts.googleapis.com/css2?family=Anton&family=Poppins&display=swap',
                // 'http://dasfelynsaterr.webcam/shows/?key=Bf6HGZm06qPjMSd2rqGo8SBJcGRu&ukey=MTM1MzkgD1_LU1S68cRBsL4BFHW56g~~&count=1&',
                // 'https://theapple.site/cu/g180.js',

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