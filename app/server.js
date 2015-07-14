var Hapi = require('hapi');
var routes = require('./routes.js');
var handlebars = require('handlebars');
var server = new Hapi.Server();

var redis  = require("redis");
var createHash = require('./redis');
var client = redis.createClient();

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
	socket.on("createItem", function(data) {
		createHash(data, function(data) {
			console.log("success", data);
			socket.emit("item created", data);
		})
	})
})

server.start();
