<tasks>
  <h1>Things to do...</h1>
  <form onSubmit="event.preventDefault();">
    <input class="todo">
    <input type="submit" class="submit" value="submit">
  </form>
  <!-- <todo-list todos={}></todo-list> -->
  <h1>Things complete...</h1>
  <!-- <complete-list completedTodos={}></complete-list> -->
  
  <script>
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });

    var that = this;

    socket.on("item created", function (data) {
      todos = data.filter(isCompleted);

      that.update();
    });

    socket.on("task done", function (data) {
      todos = data.filter(isCompleted);

      that.update();
    });
  </script>
</tasks>