require('./todo-container.css');

angular.module('app')
	.component('todoContainerComponent', {
		controller: todoContainer,
		template: require('./todo-container.html'),
		bindings: {
			filter: '<'
		}
	});

function todoContainer($scope, todoStore, todoFiltersConstant) {
	const self = this;
	const subs = {};

	self.$onInit = () => {
		subs['todoList'] = todoStore.allTodos$
			.subscribe(todoList => {
				self.noData = !todoList.length;
				self.todoList = getFilteredTodoList(todoList, self.filter);
			});
	};

	self.$onDestroy = () => {
		subs['todoList'].unsubscribe();
	};

	self.deleteTodo = event => {
		todoStore.deleteTodo(event.id);
	};

	self.toggleTodo = event => {
		todoStore.toggleTodo(event.id);
	};

	function getFilteredTodoList(todoList, filter) {
		let predicates = {
			[todoFiltersConstant.all]: (todoItem) => true,
			[todoFiltersConstant.active]: (todoItem) => !todoItem.completed,
			[todoFiltersConstant.completed]: (todoItem) => todoItem.completed,
		};

		return todoList.filter(predicates[filter]);
	}
}