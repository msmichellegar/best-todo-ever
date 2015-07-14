module.exports = function createHash (object, callback) {
	client.hmset(id, {
		"done": "yes",
		"to do": "build an app"
	}, callback);
}