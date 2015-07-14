riot.tag('todo-list', '<div class="todos"> <ul> <li each="{todo in todos}">{todo}</li> </ul> </div>', function(opts) {
    this.on('mount', function(){
      console.log("mountain");
    })
  
});
