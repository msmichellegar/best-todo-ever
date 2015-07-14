<todo-list>

  <div class="todos">
    <ul>
      <li each={todo in todos}>{todo}</li>
    </ul>
  </div>

  <script>
    this.on('mount', function(){
      console.log("mountain");
    })
  </script>

</todo-list>
