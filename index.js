

var express = require('express');
var serveStatic = require('serve-static');
var fs = require('fs');
var app = express();

app.use(serveStatic(__dirname));

app.get('/', () => fs.readFileSync(__dirname + '/index.html', 'utf-8'));

var port = process.env.PORT || 3000;
app.listen(port);
