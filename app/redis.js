var redis  = require("redis");
var client = redis.createClient();

var redisAdaptor = {};

// redisAdaptor.addList = function (object, callback) {
// 	client.rpush("todo-list", object, function (err, data) {
//    		callback(err, data);
// 	});
// };

// redisAdaptor.getList = function (key, callback) {
//     client.lrange("todo-list", 0, -1, function (err, data){
//     	callback(err, data);
//     });
// };

redisAdaptor.setItem = function (todo, callback) {
	var  key = Math.random().toString(36).substring(7);
	var creationTime = new Date().getTime().toString();
	console.log(typeof creationTime);
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

redisAdaptor.updateEntry = function(obj, callback) {
	var key = obj.key;

	client.hmset(key, obj, callback);
};

module.exports = redisAdaptor;
