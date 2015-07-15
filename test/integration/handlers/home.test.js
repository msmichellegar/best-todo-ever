var test = require("tape");
var server = require("../../../app/server.js");

test("Testing home handler", function (t) {
	var opts = {
		method: "GET",
		url: "/"
	}

	server.inject(opts, function (res) {
		var containsHtml = res.payload.indexOf("!DOCTYPE html") > -1;
		
		t.equal(res.statusCode, 200, "status codee is OK");
		t.equal(containsHtml, true, "serves index.html");
		t.end();
	})
})
