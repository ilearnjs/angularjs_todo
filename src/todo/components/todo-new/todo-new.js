angular.module('app')
	.component('todoNew', {
		controller: todoNew,
		template: require('./todo-new.html'),
		bindings: {
			onSubmit: '&'
		}
	});

function todoNew() {
	var self = this;

	self.$onInit = () => {
		self.newTodo = {};
		resetTodo();
	};

	self.submitForm = () => {
		self.onSubmit({
			$event: {
				todo: self.newTodo
			}
		});

		resetTodo();
	};

	function resetTodo() {
		self.newTodo = {};
	}
}