riot.tag('todo-list', '<div> <ul> <li each="{todos, key in todos}"><input type="checkbox" class="checkbox" id="{todos.key}" onclick="{markDone}">{todos.todo}</li> </ul> </div>', function(opts) {
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });

    var that = this

    socket.on("item created", function (data) {
      todos = data.filter(isCompleted);

      that.update();
    });

    socket.on("task done", function (data) {
      todos = data.filter(isCompleted);

      that.update();
    });
  
});
