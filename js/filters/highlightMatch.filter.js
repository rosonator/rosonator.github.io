(function () {

	'use strict';

	function HighlightItzulpenMatch ($sce) {

	 	return function(text, match) {
	 		var itzulpenList = text.split(', ');
	 		var itzulpenListToLower = text.toLowerCase().split(', ');

	 		var newList = itzulpenList.map(function (itzulpen) {
 				if (match) {
 					if (itzulpen.toLowerCase() === match.toLowerCase()) {
 						return '<span class="highlighted-match-green">' + itzulpen + '</span>';
 					} else if (itzulpenListToLower.indexOf(match.toLowerCase()) < 0) {
 						return '<span class="highlighted-match-red">' + itzulpen.replace(new RegExp('(' + match + ')', 'gi'), '<span class="highlighted-match-green">$1</span>') + '</span>';
	 				} else return itzulpen;
	 			} else return itzulpen;
	 		});
      		return $sce.trustAsHtml(newList.join(', '));
      	}
	}


	HighlightItzulpenMatch.$inject = ['$sce'];

	angular.module('itzulpenApp')
		.filter('highlightItzulpenMatch', HighlightItzulpenMatch);

})();