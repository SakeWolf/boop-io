var express = require('express');
var app = express();

app.get('/', function (request, response) {
	response.json("Boop!");
});

module.exports = app;