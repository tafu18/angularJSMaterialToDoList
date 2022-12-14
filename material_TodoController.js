angularMaterial.controller("myController",function(){   
        var todoList = this;
        todoList.todos = [
            {text:'AngularJS Öğren', done:true},
            {text:'AngularJS Material Öğren', done:true}];

    todoList.ekle = function(){
        todoList.todos.push({text:todoList.todoText, done:false});
        todoList.todoText = '';
    };

    todoList.kalan = function(){
        var count = 0;
        angular.forEach(todoList.todos,function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    todoList.archive = function() {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});