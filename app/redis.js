var redis  = require("redis");
var client = redis.createClient();

module.exports = function createHash (object, callback) {
	var id = Math.random().toString(36).substr(2, 5);
	client.hmset(id, {
		"todo": object
	}, callback);
}