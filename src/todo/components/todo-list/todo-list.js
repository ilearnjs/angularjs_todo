angular.module('app')
	.component('todoList', {
		controller: todoList,
		template: require('./todo-list.html'),
		bindings: {
			list: '<',
			onDelete: '&',
			onUpdate: '&',
			onToggle: '&'
		}
	});

function todoList() {
	var self = this;

	self.deleteTodo = event => {
		self.onDelete({
			$event: {
				id: event.id
			}
		});
	};

	self.updateTodo = event => {
		self.onUpdate({
			$event: {
				id: event.id,
				todo: event.todo
			}
		});
	};

	self.toggleTodo = event => {
		self.onToggle({
			$event: {
				id: event.id
			}
		});
	};
}