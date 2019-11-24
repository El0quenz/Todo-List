let todoList = {
	todos: [ 'item1', 'item2', 'item3' ], //Creating an Array
	displayTodos: function() {
		//Adding a function to show the Display of the Array
		console.log('My Todos', this.todos);
	},

	addTodo: function(todo) {
		//Function to add a new item to the Array
		this.todos.push(todo); //"this" to call the todos from the function itself
		this.displayTodos();
	},

	changeTodo: function(position, newValue) {
		//Function to change an item in the Array List
		this.todos[position] = newValue;
		this.displayTodos();
	},

	deleteTodo: function(position) {
		//Function to delete an item in the Array List
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};
