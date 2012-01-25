var net = require('net');

net.createServer(function(stream) {
  stream.on('connect', function() {
    console.log('got a new client');
  });

  stream.on('data', function(data) {
    stream.write('got ' + data.length + ' bytes');
  });
}).listen(8000);
