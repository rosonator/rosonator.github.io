(function () {

	'use strict';

	function ItzulpenNavbar () {

	 	return {
	    	restrict: 'E',
	    	templateUrl: 'views/navbar.html',
	    	scope: {},
	    	link: function ($scope) {
	    		$scope.navbarActive = navbarActive;

				function navbarActive(id) {
					$('.listanavbar li').removeClass('active');
					$('#nav'+id).addClass('active');
					$('#navb'+id).addClass('active');
				}
	    	}
		};			
	}


	ItzulpenNavbar.$inject = [];

	angular.module('moteApp')
		.directive('itzulpenNavbar', ItzulpenNavbar);

})();