angular.module('app')
	.component('todoItemComponent', {
		controller: todoItem,
		template: require('./todo-item.html'),
		bindings: {
			item: '<',
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
		self.newDescription = self.item.description;
		self.editing = true;
	};

	self.deleteTodo = () => {
		self.onDelete({
			$event: {
				id: self.item.id
			}
		});
	};

	self.updateTodo = () => {
		self.onUpdate({
			$event: {
				id: self.item.id,
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
				id: self.item.id
			}
		});
	};
}  