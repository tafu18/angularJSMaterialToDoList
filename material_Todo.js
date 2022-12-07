var angularMaterial = angular.module('toDoList', ['ngMaterial', 'ngMessages']);
    angularMaterial.controller("myController",function(){   
        var todoList = this;
        todoList.todos = [
            {text:'AngularJS Öğren', done:true},
            {text:'AngularJS Material Öğren', done:true}];
    
    todoList.todoText ='';
    todoList.ekle = function(){
        if(todoList.todoText != '' ){
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText = '';
        }
    };

    todoList.kalan = function(){
        var count = 0;
        angular.forEach(todoList.todos,function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    todoList.sil = function() {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});