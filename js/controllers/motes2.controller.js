moteApp.controller('motes2Controller', function ($scope, motesFactory) {
	$scope.motes = motesFactory.getMotes();
});