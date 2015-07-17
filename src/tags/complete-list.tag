<complete-list>

  <div>
    <ul>
      <li each={completedTodos, key in completedTodos}><input type="checkbox" class="checkbox" id={completedTodos.key} onclick={markUndone} checked>{completedTodos.todo}<button id={completedTodos.key} onclick={deleteTask}>Delete</button></li>
    </ul>
  </div>


  <script>
    this.on('mount', function(){
      console.log("mounted. The value of completed todos:",completedTodos);
    });

    var that = this;

    socket.on("item created", function (data) {
      completedTodos = data.filter(isCompleted);

      that.update();
    });

    socket.on("task undone", function (data) {
      completedTodos = data.filter(isCompleted);

      that.update();
    });
    
    // socket.on("task deleted", function (data) {
    //   completedTodos = data.filter(isCompleted);
    // 
    //   that.update();
    // });
    
  </script>

</complete-list>
