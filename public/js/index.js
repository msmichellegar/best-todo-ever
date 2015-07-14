var socket = io();
var todos = "data...";

var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
console.log("submit");
  socket.emit("todo", input.value);
};

socket.on("item created", function (data) {
  // console.log("whattup");
  // todos.innerHTML = '';
  console.log("now todos is:", todos);
  todos = data;
  console.log("nowww todos is:", todos);
});
