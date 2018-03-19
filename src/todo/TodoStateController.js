angular.module('app')
	.controller('TodoStateController', TodoStateController);

function TodoStateController($scope) {
	var self = this;

	self.message = 'Hello world';
}