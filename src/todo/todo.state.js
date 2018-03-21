angular.module('app')
	.config($stateProvider => {
		$stateProvider
			.state('todo', {
				abstract: true,
				url: '/',
				template: '<ui-view />'
			})
			.state('todo.all', {
				url: '',
				component: 'todoContainerComponent',
				resolve: {
					getFilter: (todoFiltersConstant) => todoFiltersConstant.all
				}
			})
			.state('todo.active', {
				url: 'active',
				component: 'todoContainerComponent',
				resolve: {
					getFilter: (todoFiltersConstant) => todoFiltersConstant.active
				}
			})
			.state('todo.completed', {
				url: 'completed',
				component: 'todoContainerComponent',
				resolve: {
					getFilter: (todoFiltersConstant) => todoFiltersConstant.completed
				}
			});
	});
