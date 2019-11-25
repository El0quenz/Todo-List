let todoList = {
	todos: [], //Creating an Array
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (let i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	changeTodo: function(position, todoText) {
		//Function to change an item in the Array List
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},

	deleteTodo: function(position) {
		//Function to delete an item in the Array List
		this.todos.splice(position, 1);
		this.displayTodos();
	},

	toggleCompleted: function(position) {
		let todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		let totalTodos = this.todos.length;
		let completedTodos = 0;

		//Get number of completed todos.
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos = completedTodos + 1;
			}
		}
		// Case1 If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			//make everything false
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			// Case 2: Otherwise, make everything true.
		} else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});
