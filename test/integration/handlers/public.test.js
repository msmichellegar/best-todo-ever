var test = require("tape");
var server = require("../../../app/server.js").server;

test("Testing public directory is available", function (t) {
	var opts = {
		method: "GET",
		url: "/js/main.js"
	}

	server.inject(opts, function (res) {
		var containsJS = res.payload.indexOf("var socket = io();") > -1;

		t.equal(res.statusCode, 200, "status codee is OK");
		t.equal(containsJS, true, "serves the javascript");
		t.end();
	})
})
