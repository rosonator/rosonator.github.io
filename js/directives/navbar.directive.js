(function () {

	'use strict';

	function ItzulpenNavbar () {

	 	return {
	    	restrict: 'E',
	    	templateUrl: 'views/navbar.html',
	    	scope: {},
	    	controller: ['$location', '$scope', function ($location, $scope) {
	    		var vm = this;

	    		vm.state = $location.$$absUrl.split("/#/")[1];

				$scope.$on('$locationChangeSuccess', function(ev, newLocation, oldLocation) { 
				   vm.state = newLocation.split("/#/")[1];
				});
	    	}],
	    	controllerAs: 'vm'
		};			
	}


ItzulpenNavbar.$inject = [];

	angular.module('itzulpenApp')
		.directive('itzulpenNavbar', ItzulpenNavbar);

})();