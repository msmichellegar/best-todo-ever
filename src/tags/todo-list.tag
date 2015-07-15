<todo-list>

  <div>
    <ul>
      <li each={todos, key in todos}>{todos.todo}</li>
    </ul>
  </div>

  <ul>
    <li each={ items.filter(whatShow) }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
    </li>
  </ul>

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
