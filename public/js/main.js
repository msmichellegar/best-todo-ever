var socket = io();

function isCompleted (task) {
  if (task.completedTime === "null") {
    return task;
  }
}

socket.on("page loaded", function (data) {
  todos = data.filter(isCompleted);

  riot.mount('*', {todos:todos});
});

var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
  socket.emit("todo", input.value);
  input.value = '';
};

function markDone(e) {
  var taskId = e.target.id;
  socket.emit("task done", taskId);
}
