var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.use(express.static('static'));

app.listen(3000, () => {
	console.log('Starting server on port 3000');
})