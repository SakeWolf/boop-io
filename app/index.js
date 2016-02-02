var express = require('express');
var app = express();

app.get('/', function (request, response) {
	console.log("Request received. Sending boop...");
	response.json("Boop!");
});

module.exports = app;