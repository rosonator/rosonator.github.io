var moteApp = angular.module('moteApp', ['ngRoute']);

moteApp.config(function ($routeProvider) {
	$routeProvider
	.when ('/inicio',
		{
			templateUrl: 'views/home.html'
		})
	.when ('/step1',
		{
			controller:'motes1Controller',
			templateUrl: 'views/step1.html'
		})
		.when ('/step2',
		{
			controller:'motes2Controller',
			templateUrl: 'views/step2.html'
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
	.otherwise({ redirectTo: '/inicio' });
});