var itzulpenApp = angular.module('itzulpenApp', ['ngRoute']);

itzulpenApp.config(function ($routeProvider) {
	$routeProvider
	.when ('/home',
	{
		templateUrl: 'views/home.html'
	})
	.when ('/castellanoToEuskara',
	{
		controller:'itzulpenController',
		controllerAs:'vm',
		templateUrl: 'views/itzulpenak.html',
		resolve: {
			languaje: function() { return "castellano"; }
		}
	})
	.when ('/euskaraToCastellano',
	{
		controller:'itzulpenController',
		controllerAs:'vm',
		templateUrl: 'views/itzulpenak.html',
		resolve: {
			languaje: function () { return "euskara"; }
		}
	})
	.otherwise({ redirectTo: '/home' });
});