var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var responseBody = [{username: "fooUser", body: 'barBody'}];

app.get('/api/posts', function (req, res) {
    res.json(responseBody);
    console.log('Sending response of: ', responseBody);
})

app.listen(3000, function () {
    console.log('Server Listening on port:', 3000)
})
