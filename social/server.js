var express = require('express');
var bodyParser = require('body-parser');
var webSocketServer = require('./websockets');

var app = express();

app.use(bodyParser.json());
app.use(express.static('assets'));

app.use(require('./auth'))

app.use(require('./controllers/api/posts'));
app.use(require('./controllers/api/users'));
app.use(require('./controllers/api/sessions'));

var server = app.listen(8080, function () {
    console.log('Server Listening on port:', 8080);
})

webSocketServer.connect(server);

