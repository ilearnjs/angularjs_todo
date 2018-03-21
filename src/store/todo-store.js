angular.module('app')
	.service('todoStore', todoStore);

function todoStore() {
	let id = 2;
	const store = this;
	const todoList = [{
		id: 1,
		description: 'A',
		completed: false
	}];
	const behaviourSubject = new Rx.BehaviorSubject(todoList);

	store.allTodos$ = behaviourSubject.asObservable();

	store.addTodo = todo => {
		const newTodo = Object.assign(
			{},
			todo, {
				id: id++,
				completed: false
			}
		);

		todoList.push(newTodo);
		behaviourSubject.next(todoList);
	};

	store.deleteTodo = id => {
		const todoIndex = findIndex(id);
		todoList.splice(todoIndex, 1);
		behaviourSubject.next(todoList);
	};

	store.updateTodo = (id, todo) => {
		const existingTodo = find(id);
		existingTodo.description = todo.description;
		behaviourSubject.next(todoList);
	};

	store.toggleTodo = id => {
		const todo = find(id);
		todo.completed = !todo.completed;
		behaviourSubject.next(todoList);
	};

	function find(id) {
		return todoList.find(todo => todo.id === id);
	}

	function findIndex(id) {
		return todoList.findIndex(todo => todo.id === id);
	}
}