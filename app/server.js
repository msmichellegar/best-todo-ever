var Hapi 		= require('hapi');
var routes 		= require('./routes.js');
var server 		= new Hapi.Server();

var redisAdaptor = require('./redis.js');
var sendingToDoList = require("./lib/sending-todos.js");

server.connection({
	port: process.env.PORT || 9090
});

var io = require('socket.io')(server.listener);

server.route(routes);

io.on("connection", function (socket) {

	redisAdaptor.getAllHashKeys(function (err, res) {
		sendingToDoList(res, socket, "page loaded");
	});

	socket.on("task done", function(data) {
		redisAdaptor.markDone(data, function(err, res){

			if (err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function (err, res) {
				sendingToDoList(res, io, "task done");
			});
		});
	});

	socket.on("todo", function(data) {
		redisAdaptor.setItem(data, function (err, res){

			if (err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function (err, res) {
				sendingToDoList(res, io, "item created");
			});
		});
	});
});

module.exports = server;
