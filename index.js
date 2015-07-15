server = require("./app/server.js");

server.start(function() {
	console.log("server now starting at: " + server.info.uri);
});