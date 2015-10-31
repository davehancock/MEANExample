var ws = require('ws');

exports.connect = function (server) {
    var webSocketServer = new ws.Server({server: server});

    webSocketServer.on('connection', function (ws) {

        ws.send('Hello From WS!');

        ws.on('message', function (data) {
            ws.send("echo... " + data);
        });

    });
};