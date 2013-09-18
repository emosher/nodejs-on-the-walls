/**
 * Dependencies.
 */
var net = require('net');

var server = net.createServer();

server.on('connection', function(socket) {
    console.log('I can haz a connection');
});

server.listen(4000, function() {
    console.log('Server created.');
});