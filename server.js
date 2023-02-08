var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + "/build"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port);
//  console server
console.log('server started '+ port);