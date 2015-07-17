server = require("./app/server.js").server;
init = require("./app/server.js").init;

server.start(function() {
	init(server.listener, function () {
		console.log("server now starting at: " + server.info.uri);
	});
});
