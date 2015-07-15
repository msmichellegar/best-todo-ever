var Hapi 		= require('hapi');
var routes 		= require('./routes.js');
var handlebars 	= require('handlebars');
var server 		= new Hapi.Server();

var redisAdaptor = require('./redis.js');
var sendingToDoList = require("./lib/sending-todos.js");

server.connection({
	port: 9090
});

var io = require('socket.io')(server.listener);

server.views({
  engines: {
    html: handlebars
  },
  relativeTo: __dirname,
  path: '../public/views'
});

server.route(routes);

io.on("connection", function (socket) {

	redisAdaptor.getAllHashKeys(function (err, res) {

		sendingToDoList(res, socket, "page loaded");
	});

	socket.on("todo", function(data) {
		redisAdaptor.setItem(data, function (err, res){

			if (err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function (err, res) {
				sendingToDoList(res, io, "item created");
			});
		})
	});
});

module.exports = server;
