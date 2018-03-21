angular.module('app')
	.component('todoItem', {
		controller: todoItem,
		template: require('./todo-item.html'),
		bindings: {
			id: '<',
			description: '<',
			completed: '<',
			onDelete: '&',
			onUpdate: '&',
			onToggle: '&'
		}
	});

function todoItem() {
	var self = this;

	self.$onInit = () => {
		self.editing = false;
	};

	self.enableEditing = () => {
		self.newDescription = self.description;
		self.editing = true;
	};

	self.deleteTodo = () => {
		self.onDelete({
			$event: {
				id: self.id
			}
		});
	};

	self.updateTodo = () => {
		self.onUpdate({
			$event: {
				id: self.id,
				todo: {
					description: self.newDescription
				}
			}
		});

		self.editing = false;
	};

	self.toggleTodo = () => {
		self.onToggle({
			$event: {
				id: self.id
			}
		});
	};
}  