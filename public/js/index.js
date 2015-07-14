var socket = io();

var todos = document.getElementsByClassName("todos")[0];
var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
  console.log("it's working!");
  socket.emit("todo", input.value);
};

socket.on("item created", function(data) {
  console.log("whattup");
  console.log(data);
})
