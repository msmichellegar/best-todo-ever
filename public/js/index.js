var socket = io();

var todos = document.getElementsByClassName("todos")[0];
var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
  socket.emit("todo", input.value);
};

socket.on("item created", function (data) {
  console.log("whattup");
  todos.innerHTML = '';
  todos.innerHTML = '<p>' + datas + '</p>';
})
