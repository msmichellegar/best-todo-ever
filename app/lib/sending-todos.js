var redisAdaptor 	= require('../redis.js').redisAdaptor;
var compareTime 	= require('./compare-time.js');

function sendingToDoList (res, socket, channel) {
	// When updating messages with pub/sub, they are returned as strings
	if (typeof res === "string") {
			res = res.split(',')
	}

	var todoListData = [];
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

			todoListData.push(obj);

			if (todoListData.length === length) {
				todoListData.sort(compareTime);

				socket.emit(channel, todoListData);
			}
		});
	}
}

module.exports = sendingToDoList;
