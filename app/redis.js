module.exports = [
  {
    createHash: function(object, callback) {
      client.hmset(id, {
        "done": "yes",
        "to do": "build an app"
      }, callback);
  }
}];
