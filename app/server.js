var Hapi = require('hapi');
var routes = require('./routes.js');
var handlebars = require('handlebars');
var server = new Hapi.Server();

var redisAdaptor = require('./redis.js');

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
	redisAdaptor.getList("todos", function(err, res) {
		if (err) {
			console.log(err);
		}
		console.log("one", res);
		socket.emit("item created", res);
	});
	socket.on("todo", function(data) {
		redisAdaptor.addList(data, function(err, res) {
			if(err) {
				console.log(err);
			}
			redisAdaptor.getList("todos", function(err, res) {
				if (err) {
					console.log(err);
				}
				console.log("three");
				io.emit("item created", res);
			});
			console.log("two", res);
		});
	});
});

server.start();
