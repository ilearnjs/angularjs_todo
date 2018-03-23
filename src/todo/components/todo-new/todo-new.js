angular.module('app')
	.component('todoNewComponent', {
		controller: todoNew,
		template: require('./todo-new.html')
	});

function todoNew($scope, $state, todoStore) {
	var self = this;

	self.$onInit = () => {
		self.newTodo = {};
	};

	self.submitForm = () => {
		todoStore.addTodo(self.newTodo);
		$state.go('todo.all');
	};
}