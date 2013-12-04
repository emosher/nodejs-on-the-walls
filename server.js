/**
 * Dependencies.
 */
var net = require('net'),
    fs = require('fs'),
    JSONStream = require('json-stream');

var file = fs.createWriteStream(__dirname + '/logs.json', { flags: 'a' }),
    server = net.createServer();

server.on('connection', function(socket) {
    var jsonStream = new JSONStream();
    socket.pipe(jsonStream).pipe(file, { end: false });
});

server.listen(4000, function() {
    console.log('Server created.');
});