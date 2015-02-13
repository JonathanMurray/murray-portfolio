var express = require('express');

var app = express();
var http = require('http');
var server = http.createServer(app);



// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile('index.html', {root: "./views"});
});

server.listen(process.env.PORT || 5000);
console.log('Express server started on port %s', server.address().port);