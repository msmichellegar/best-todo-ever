riot.tag('todo-list', '<div> <ul> <li each="{thing in todos}">{thing}</li> </ul> </div> <ul> <li each="{ items.filter(whatShow) }"> <input type="checkbox" __checked="{ done }" onclick="{ parent.toggle }"> { title } </li> </ul>', function(opts) {
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });

    var input = document.getElementsByClassName("todo")[0];
    var submit = document.getElementsByClassName("submit")[0];

    submit.onclick = function() {
      socket.emit("todo", input.value);
    };

    var that = this

    socket.on("item created", function (data) {
      todos = data;
      that.update();
    });
  
});
