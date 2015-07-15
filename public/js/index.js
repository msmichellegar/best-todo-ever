var socket = io();

socket.on("page loaded", function (data) {
  todos = data;

  riot.mount('*', {todos:todos});
});

var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
  socket.emit("todo", input.value);
};

function markDone(err) {
  var taskId = this._id;
  console.log("taskId:",taskId);
  socket.emit("task done", taskId);
}
