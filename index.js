var express = require('express');
var expressHbs = require('express-handlebars');
var cors = require('cors');

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
app.use(cors());

tabs = [
	{name:"about", link_text:"About"},
	{name:"familytree", link_text:"FamilyTree", demo:true, description: "An interactive family tree webpage"},
	{name:"towerdefense", link_text:"TD Game", description: "A Tower-defense game written in Java"},
	{name:"chatbot", link_text:"ChatBot", demo:true, description: "A Prolog project"},
	{name:"pong", link_text:"Pong", demo:true, description: "A simple JavaScript-game"},
	{name:"genetic-elevators", link_text:"Genetics", description: "Computer Science Bachelor's project"},
	{name:"soundcloud", link_text:"SoundCloud"},
];

icons = [
	{src:"static/images/github-icon.jpg", href:"https://github.com/JonathanMurray", title:"GitHub"},
	{src:"static/images/linkedin-icon.png", href:"https://www.linkedin.com/profile/view?id=312787250&trk=nav_responsive_tab_profile", title:"LinkedIn"},
	{src:"static/images/soundcloud-icon.png", href:"https://soundcloud.com/goblinsguild", title:"SoundCloud"},
	{src:"static/images/youtube-icon.jpg", href:"https://www.youtube.com/user/GoblinsGuild", title:"YouTube"}
];

app.get('/', function(req, res) {
	res.render('main.html', {layout: false, tabs:tabs, icons:icons});
});

app.use('/static', express.static(__dirname + '/public'));

server.listen(process.env.PORT || 5000);
console.log('Express server started on port %s', server.address().port);