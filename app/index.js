var express = require('express');
var app = express();

app.get('/', function (request, response) {
	response.json("Boop!");
});

app.listen(3000);
console.log("Listening on port 3000...");