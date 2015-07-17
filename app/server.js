var Hapi 		= require('hapi');
var routes 		= require('./routes.js');
var server 		= new Hapi.Server();

var redisAdaptor = require('./redis.js').redisAdaptor;
var pub = require('./redis.js').pub;
var sub = require('./redis.js').sub;

var sendingToDoList = require("./lib/sending-todos.js");

server.connection({
	port: process.env.PORT || 9090
});

var socketio = require('socket.io');

server.route(routes);

function socketSetup (socket) {

	console.log("socketSetup connected!")

	redisAdaptor.getAllHashKeys(function (err, res) {
		sendingToDoList(res, socket, "todos:active");
	});

	socket.on("task done", function(data) {
		redisAdaptor.markDone(data, function(err, res){

			if (err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function (err, res) {
				sendingToDoList(res, io, "todos:active");
			});
		});
	});

	sub.on("message", function(channel, data) {
		socket.emit(channel, data);
	});

	socket.on("todo", function(data) {
		redisAdaptor.setItem(data, function (err, res){
			
			if (err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function (err, res) {
				sendingToDoList(res, io, "todos:active");
			});
		});
	});
}

function init (listener, callback) {

	pub.on("ready", function() {

		sub.on("ready", function() {

			sub.subscribe("todos:active", "todos:inactive");
			io = socketio(listener);
			io.on('connection', socketSetup);

			callback();
		});
	});
}

module.exports = {
	server: server,
	init: init
};
