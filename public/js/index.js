var socket = io();
var todos = "asd";

var input = document.getElementsByClassName("todo")[0];
var submit = document.getElementsByClassName("submit")[0];

submit.onclick = function() {
console.log("submit");
  socket.emit("todo", input.value);
};

socket.on("item created", function (data) {
  // console.log("whattup");
  // todos.innerHTML = '';
  // todos.innerHTML = '<p>' + data + '</p>';
  console.log("now todos is:", todos);
  todos = data;
});
