var socket = io();

socket.on('todos:active', function(data) {
  todos = JSON.parse(data);
  riot.mount('todo-list', {todos: todos});
})

socket.on('todos:inactive', function(data) {
  completedTodos = JSON.parse(data);
  riot.mount('complete-list', {completedTodos: completedTodos});
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

function markUndone(e) {
  var taskId = e.target.id;
  socket.emit("task undone", taskId);
}