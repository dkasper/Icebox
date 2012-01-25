var stest = require('stest'),
    assert = require('assert'),
    backend = require('./backend'),
    pipe = require('./pipe'),
    net = require('net'),
    util = require('util'),
    events = require('events');


stest.addCase('stest', {}, {
  setup: function(promise) {
    stream = net.createConnection(4000);
    stream.on('data', function(data) {
      console.log(data.toString());
      promise.emit('data', data);
    });

    stream.write('hello world\n');
  },
  data: function(data) {
    console.log('asserting');
    assert.equal('got 12 bytes', data.toString());
  },
  teardown: function(errors) {
    console.log(errors);
    if(errors.length > 0) assert.ok(0);
    stream.destroy();
    backend.shutdown();
    pipe.shutdown();
  }
}).run();
