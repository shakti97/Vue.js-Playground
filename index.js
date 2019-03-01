var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      task : '',
      prevTask : '',
      seen : true,
      button : 'Add Task',
      todos : [
          {text : 'Prepare for GSOC'},
          {text : 'Build Full Stack App'},
          {text : 'Learn Vue'}
      ]
    },
    methods : {
        wannaSee: function() {
            this.seen =  !this.seen;
        },
        addTask : function(){
            var index=this.todos.findIndex((todox)=>{if(todox.text==this.prevTask){return todox.text}})
            console.log(index);
            if(index>=0){
                this.todos[index]={text : this.task};
            }
            else{
                this.todos.push({text : app.task})
            }
             
        },
        deleteTask : function(todo){
            console.log('delete Task ',this.todos);
            const newTodo = this.todos.filter((value)=>value.text !=todo);
            this.todos=newTodo;
        },
        editTask : function(todo){
            console.log('edit Task');
            this.task=todo;
            this.prevTask=todo;
            this.button='Edit Task';
        }
    }
  })
  app.message='good Evening vue';
  app.seen=false;
  app.todos.push({text : 'Want to Contribute to OSS'});