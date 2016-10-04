

var express = require('express');
var serveStatic = require('serve-static');
var fs = require('fs');
var app = express();

app.use(serveStatic(__dirname));

app.get('/', (req, res) => res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8')));
app.get('/nps', (req, res) => res.send(fs.readFileSync(__dirname + '/nps.html', 'utf-8')));

var port = process.env.PORT || 3000;
app.listen(port);
