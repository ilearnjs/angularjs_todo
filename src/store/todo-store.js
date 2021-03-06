angular.module('app')
	.service('todoStore', todoStore);

function todoStore() {
	let id = 4;
	const store = this;
	const todoList = [
		{
			id: 1,
			description: 'Learn React',
			created: new Date('3/10/2018'),
			completedOn: null,
			completed: true
		},
		{
			id: 2,
			description: 'Learn Angular',
			created: new Date('3/18/2018'),
			completedOn: null,
			completed: false
		},
		{
			id: 3,
			description: 'Write Unit tests',
			created: new Date('3/30/2018'),
			completedOn: null,
			completed: false
		}
	];

	const behaviourSubject = new Rx.BehaviorSubject(todoList);

	store.allTodos$ = behaviourSubject.asObservable();

	store.getById = id => {
		return find(id);
	};

	store.addTodo = todo => {
		const newTodo = Object.assign(
			{},
			todo, {
				id: id++,
				created: new Date(),
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

	store.editTodo = (id, todo) => {
		const existingTodo = find(id);
		existingTodo.description = todo.description;
		behaviourSubject.next(todoList);
	};

	store.toggleTodo = id => {
		const todo = find(id);
		todo.completed = !todo.completed;
		todo.completedOn = todo.completed ? new Date() : null;
		behaviourSubject.next(todoList);
	};

	function find(id) {
		return todoList.find(todo => todo.id === id);
	}

	function findIndex(id) {
		return todoList.findIndex(todo => todo.id === id);
	}
}