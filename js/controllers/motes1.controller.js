moteApp.controller('motes1Controller', function ($scope, motesFactory) {
	$scope.motes = motesFactory.getMotes();

	$scope.anadirMote =  function () {
		if (!isNaN($scope.nuevoMote.popularity)) {
			var max = Math.max.apply(Math, motesFactory.getMotes().map(function(o){return o.priority;})) + 1;
			motesFactory.setMotes($scope.nuevoMote.name, max, parseInt($scope.nuevoMote.popularity));	
		}
	};
});