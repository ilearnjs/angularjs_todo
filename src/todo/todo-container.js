angular.module('app')
	.component('todoContainerComponent', {
		controller: todoContainer,
		template: require('./todo-container.html')
	});

function todoContainer($scope, todoStore) {
	const self = this;
	const subs = {};

	self.$onInit = () => {
		subs['todoList'] = todoStore.allTodos$
			.subscribe(todoList => {
				self.todoList = todoList;
			});
	};

	self.$onDestroy = () => {
		subs['todoList'].unsubscribe();
	};

	self.addTodo = event => {
		todoStore.addTodo(event.todo);
	};

	self.deleteTodo = event => {
		todoStore.deleteTodo(event.id);
	};

	self.updateTodo = event => {
		todoStore.updateTodo(event.id, event.todo);
	};

	self.toggleTodo = event => {
		todoStore.toggleTodo(event.id);
	};
}