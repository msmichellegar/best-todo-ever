riot.tag('todo-list', '<div>{todos}</div> ', function(opts) {
    this.on('mount', function(){
      console.log("mounted. The value of todos:",todos);
    });
  
});
