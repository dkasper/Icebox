var assert = require('assert'),
    backend = require('./backend'),
    pipe = require('./pipe'),
    net = require('net'),
    util = require('util'),
    events = require('events'),
    stream;

module.exports = {
  setUp: function(callback) {
    stream = net.createConnection(4000);
    callback();
  },

  tearDown: function(callback) {
    stream.destroy();
    backend.shutdown();
    pipe.shutdown();
    callback();
  },
  test1: function(test) {
    stream.on('data', function(data) {
      test.equals(data.toString(), 'got 12 bytes');
      test.done();
    });
    stream.write('hello world\n');
  }
}

