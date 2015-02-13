var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/person', function(request, response) {
  response.send('Hello Jonathan!');
});

app.get('/person/:name', function(request, response) {
  var name = request.param('name');
  response.send('Hello ' + name);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
