var redisAdaptor 	= require('../redis.js').redisAdaptor;
var compareTime 	= require('./compare-time.js');

var pub = require('../redis.js').pub;

function sendingToDoList (res, socket, channel) {
	
	var activeTodoList = [];
	var inactiveTodoList = [];
	var i;
	var length = res.length;

	for (i = 0; i < length; i++) {

		redisAdaptor.getHashedValues(res[i], function (err, res) {
			var obj;
			
			if (err) {
				console.log(err);
			}
			
			obj = {
				todo: res[0],
				creationTime : res[1],
				completedTime : res[2],
				key : res[3]
			};
			
			if (obj.completedTime === "null") {
				activeTodoList.push(obj);
			} else {
				inactiveTodoList.push(obj);
			}
			
			if (activeTodoList.length + inactiveTodoList.length === length) {
				activeTodoList.sort(compareTime);
				inactiveTodoList.sort(compareTime);
			
				pub.publish("todos:active", JSON.stringify(activeTodoList));
				pub.publish("todos:inactive", JSON.stringify(inactiveTodoList));
			}
		});
	}
}

module.exports = sendingToDoList;
