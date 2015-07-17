<todo-list>

  <div>
    <ul>
      <li each={todos, key in todos}><input type="checkbox" class="checkbox" id={todos.key} onclick={markDone}>{todos.todo}</li>
    </ul>
  </div>


  <script>
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });

    var that = this;

  </script>

</todo-list>
