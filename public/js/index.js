var socket = io();

socket.on("page loaded", function (data) {
  todos = data;

  riot.mount('*', {todos:todos});
});