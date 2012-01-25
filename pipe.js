var net = require('net');
var server = net.createServer(function(socket) {
  var backend = net.createConnection(8000);
  socket.pipe(backend);
  backend.pipe(socket);
  backend.on('close', function() {
    socket.destroy();
  });
});
server.listen(4000);

exports.shutdown = function() {
  server.close();
}
