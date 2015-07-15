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

function compareTime (a, b) {
	if(a.creationTime > b.creationTime){
		return 1;
	}
	if(a.creationTime < b.creationTime){
		return -21;
	};
	return 0;
}

io.on("connection", function (socket) {

	redisAdaptor.getAllHashKeys(function(err, res) {
		if (err) {
			console.log(err)
		}

		var todoListData = [];
		var i;
		var length = res.length;

		for (i = length - 1; i >= 0; i--) {

			redisAdaptor.getHashedValues(res[i], function(err, res) {
				if (err) {
					console.log(err)
				}
				var obj = {
					todo: res[0],
					creationTime : res[1],
					completedTime : res[2]
				}
				todoListData.push(obj)

				if (todoListData.length === length) {
					todoListData.sort(compareTime);
					socket.emit("page loaded", todoListData);
				}
			});
		};

	});

	socket.on("task done", function(data) {
		redisAdaptor.markDone(data, function(err, res){
			if (err) {
				console.log(err);
			}
			console.log(res);
		})
	})

	socket.on("todo", function(data) {
		redisAdaptor.setItem(data, function(err, res){
			if(err) {
				console.log(err);
			}

			redisAdaptor.getAllHashKeys(function(err, res) {
				if (err) {
					console.log(err)
				}

				var todoListData = [];
				var i;
				var length = res.length;

				for (i = length - 1; i >= 0; i--) {

					redisAdaptor.getHashedValues(res[i], function(err, res) {
						if (err) {
							console.log(err)
						}
						var obj = {
							todo: res[0],
							creationTime : res[1],
							completedTime : res[2]
						}
						todoListData.push(obj)

						if (todoListData.length === length) {
							todoListData.sort(compareTime);
							io.emit("item created", todoListData);
						}
					});
				};
			});
		})
	});
});

server.start();
