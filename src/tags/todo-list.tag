<todo-list>

  <div>{todos}</div>
 <!--    <ul>
      <li each={todo in todos}>{todo}</li>
    </ul>
  </div> -->

  <script>
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });
  </script>

</todo-list>
