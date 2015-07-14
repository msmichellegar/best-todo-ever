var redis  = require("redis");
var client = redis.createClient();

var redisAdaptor = {};

redisAdaptor.createHash = function (object, callback) {
	var id = Math.random().toString(36).substr(2, 5);
	client.hmset("todos", {
		object : object
	}, callback);
};

redisAdaptor.getHashes = function (key, callback) {
  client.hgetall(key, callback);
};

module.exports = redisAdaptor;
