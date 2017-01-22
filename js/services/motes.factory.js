moteApp.factory('motesFactory', function () {
	var motes = 
	[
		{ name: 'Roski', priority: 1, popularity: 34 }, 
		{ name: 'Chuflas', priority: 3, popularity: 16 }, 
		{ name: 'Txile', priority: 4, popularity: 6 }, 
		{ name: 'Lupi', priority: 2, popularity: 7 }
	];
	var factory = {};
	factory.getMotes = function () {
		return motes;
	};

	factory.setMotes = function (mote, priority, popularity) {
		motes.push({
			name: mote, 
			priority: priority,
			popularity: popularity,
		});	
	};

	return factory;	
});