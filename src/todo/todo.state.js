angular.module('app')
	.config($stateProvider => {
		$stateProvider
			.state('todo', {
				url: '/',
				controller: 'TodoStateController',
				controllerAs: 'todoState',
				template: require('./todo.html')
			});
	});
