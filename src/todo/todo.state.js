angular.module('app')
	.config($stateProvider => {
		$stateProvider
			.state('todo', {
				url: '/',
				component: 'todoContainer',
			});
	});
