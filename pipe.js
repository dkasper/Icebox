var net = require('net');
net.createServer(function(socket) {
  var backend = net.createConnection(8000);
  socket.pipe(backend);
  backend.pipe(socket);
  backend.on('close', function() {
    socket.destroy();
  });
}).listen(4000);
