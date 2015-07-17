var socket = io();

function isCompleted (task) {
  if (task.completedTime === "null") {
    return task;
  }
}

socket.on('todos:active', function(data) {
  todos = JSON.parse(data);
  riot.mount('*', {todos: todos});
})

socket.on('todos:inactive', function(data) {

  console.log("inactive data mainjs >>>", data);
})

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
