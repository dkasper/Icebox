var net = require('net');

var server = net.createServer(function(stream) {
  stream.on('connect', function() {
    console.log('got a new client');
  });

  stream.on('data', function(data) {
    stream.write('got ' + data.length + ' bytes');
  });
});
server.listen(8000);

exports.shutdown = function() {
  server.close();
}
