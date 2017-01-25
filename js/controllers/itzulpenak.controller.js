(function () {

	'use strict';

	function ItzulpenController ($scope, itzulpenFactory, itzulpenLevels, languaje) {
	
		var vm = this;
		vm.languaje = languaje;
		vm.itzulpenLevels = itzulpenLevels;

		vm.refreshItzulpenSet = refreshItzulpenSet;
		vm.toggleDisplay = toggleDisplay;

		if (languaje === "castellano") vm.keyIndex = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		else vm.keyIndex = ['A','B','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','X','Z'];

		function refreshItzulpenSet (key) {
			if (key) vm.key = key;
			if (!vm.key) vm.key = 'A';
			if (languaje === "castellano") vm.itzulpenak = itzulpenFactory.getCastellano(vm.level, vm.key);
			else vm.itzulpenak = itzulpenFactory.getEuskara(vm.level, vm.key);
		}

		function toggleDisplay (row) {
			row.display = !row.display;
		};

		refreshItzulpenSet();
	};

ItzulpenController.$inject = ['$scope', 'itzulpenFactory', 'itzulpenLevels', 'languaje'];

	angular.module('moteApp')
		.controller('itzulpenController', ItzulpenController);
})();