<todo-list>

  <div>
    <ul>
      <li each={todos, key in todos}>{todos.todo}</li>
    </ul>
  </div>


  <script>
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });

    var that = this

    socket.on("item created", function (data) {
      todos = data;
      console.log(todos);
      that.update();
    });
  </script>

</todo-list>
