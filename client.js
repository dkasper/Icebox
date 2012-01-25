var net = require('net');

socket = net.createConnection(4000);
socket.on('data', function(data) {
  console.log(data.toString());
});

var s = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, nibh in fermentum dictum, urna odio accumsan sem, vel posuere nibh augue quis ligula. Aliquam consequat blandit turpis, eu ullamcorper massa vulputate nec. Nulla dignissim feugiat metus, at semper lacus accumsan sit amet. Curabitur vestibulum eleifend faucibus. Aliquam consectetur aliquam diam, vel dictum justo venenatis a. Proin augue nulla, interdum eget dictum a, laoreet feugiat ipsum. Vivamus at lacus vitae velit fermentum malesuada.';
for(var i=0;i<10;i++) {
  s += s;
}

socket.write(s);
