riot.tag('complete-list', '<div> <ul> <li each="{completedTodos, key in completedTodos}"><input type="checkbox" class="checkbox" id="{completedTodos.key}" onclick="{markDone}" checked>{completedTodos.todo}</li> </ul> </div>', function(opts) {
    this.on('mount', function(){
      console.log("mounted. The value of completed todos:",completedTodos);
    });

    var that = this;

    socket.on("item created", function (data) {
      completedTodos = data.filter(isCompleted);

      that.update();
    });

    socket.on("task done", function (data) {
      completedTodos = data.filter(isCompleted);

      that.update();
    });
  
});