var express = require('express');
var expressHbs = require('express-handlebars');

hbs = expressHbs.create({
	extname:'html', 
	defaultLayout:'main.html',
	helpers: require('./handlebars-helpers')
});

var app = express();
var http = require('http');
var server = http.createServer(app);

app.engine('html', hbs.engine);
app.set('view engine', 'html');

tabs = [
	{name:"about", link_text:"about"},
	{name:"chatbot", link_text:"chatbot", demo:true, description: "A Prolog project"},
	{name:"pong", link_text:"pong", demo:true, description: "A simple JavaScript-game"},
	{name:"genetic-elevators", link_text:"genetics", description: "Computer Science Bachelor's project"},
	{name:"soundcloud", link_text:"soundcloud"},
	{name:"youtube", link_text:"youtube"},
];

app.get('/', function(req, res) {
	res.render('main.html', {layout: false, tabs:tabs});
});

app.use('/static', express.static(__dirname + '/public'));

server.listen(process.env.PORT || 5000);
console.log('Express server started on port %s', server.address().port);