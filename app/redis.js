var redis  = require("redis");
var client = redis.createClient();

var redisAdaptor = {};

redisAdaptor.addList = function (object, callback) {
	client.rpush("todo-list", object, function (err, data) {
   		callback(err, data);
	});
};

redisAdaptor.getList = function (key, callback) {
    client.lrange("todo-list", 0, -1, function (err, data){
    	callback(err, data);
    });
};

module.exports = redisAdaptor;
