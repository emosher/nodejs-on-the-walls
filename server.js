/**
 * Dependencies.
 */
var net = require('net'),
    fs = require('fs');

var file = fs.createWriteStream(__dirname + '/logs.json'),
    server = net.createServer();

server.on('connection', function(socket) {
    socket.pipe(file);
});

server.listen(4000, function() {
    console.log('Server created.');
});