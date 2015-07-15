var redisAdaptor 	= require('../redis.js');
var compareTime 	= require('./compare-time.js');

function sendingToDoList (res, socket, evt) {
	var todoListData = [];
	var i;
	var length = res.length;

	for (i = length - 1; i >= 0; i--) {

		redisAdaptor.getHashedValues(res[i], function (err, res) {
			var obj;

			if (err) {
				console.log(err)
			}

			obj = {
				todo: res[0],
				creationTime : res[1],
				completedTime : res[2],
				key : res[3]
			}

			todoListData.push(obj)

			if (todoListData.length === length) {

				todoListData.sort(compareTime);
				socket.emit(evt, todoListData);
			}
		});
	};
}

module.exports = sendingToDoList;
