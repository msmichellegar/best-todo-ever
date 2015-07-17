var redis  = require("redis");
var client;
var url = require("url");

var pub;
var sub;

if(process.env.REDISTOGO_URL) {
	var redisURL = url.parse(process.env.REDISTOGO_URL);

	client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	client.auth(redisURL.auth.split(":")[1]);

	pub = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	pub.auth(redisURL.auth.split(":")[1]);

	sub = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
	sub.auth(redisURL.auth.split(":")[1]);
} else {
	client = redis.createClient();
	pub = redis.createClient();
	sub = redis.createClient();
}

var redisAdaptor = {};

redisAdaptor.setItem = function (todo, callback) {
	var  key = Math.random().toString(36).substring(7);
	var creationTime = new Date().getTime().toString();
	var obj = {
		"todo" : todo,
		"creationTime" : creationTime,
		"completionTime" : null,
		"key":key
	};
	client.hmset(key, obj, callback);
};

redisAdaptor.getHashedValues = function(key, callback) {
	client.hvals(key, callback);
};

redisAdaptor.getAllHashKeys = function(callback) {
	client.keys('*', callback);
};

redisAdaptor.markDone = function(taskId, callback) {
	var key = taskId;
	var completionTime = new Date().getTime().toString();
	var obj = {
		"completionTime" : completionTime
	};
	console.log(key, obj);
	client.hmset(key, obj, callback);
};

module.exports = {
	redisAdaptor: redisAdaptor,
	pub: pub,
	sub: sub
};
