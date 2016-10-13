

var express = require('express');
var serveStatic = require('serve-static');
var fs = require('fs');
var app = express();
var fetch = require('node-fetch');

app.use(serveStatic(__dirname));

app.get('/', (req, res) => res.send(fs.readFileSync(__dirname + '/index.html', 'utf-8')));
app.get('/nps', (req, res) => res.send(fs.readFileSync(__dirname + '/nps.html', 'utf-8')));
app.get('/fetch', (req, res) => {

	fetch('https://errors-next.ft.com/errors/page/404')
		.then(function(res) {
			return res.text();
		}).then(function(body) {
			console.log(body);
		});

});

var port = process.env.PORT || 3000;
app.listen(port);
