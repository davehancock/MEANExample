var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('assets'));
app.use(require('./controllers/api/posts'));

app.listen(3000, function () {
    console.log('Server Listening on port:', 3000)
})
