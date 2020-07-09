var http = require('http'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.get('/', (req, res) => res.send('Hello World'))

app.listen(3000, () => console.log('Server started listening on port 3000'));