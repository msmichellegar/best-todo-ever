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
	redisAdaptor.getHashes("todos", function(err, res) {
		if (err) {
			console.log(err);
		}
		console.log(res);
	});
	socket.on("todo", function(data) {
		redisAdaptor.createHash(data, function(err, res) {
			if(err) {
				console.log(err);
			}
			console.log(res);
			socket.emit("item created", data);
		});
	});
});

server.start();
