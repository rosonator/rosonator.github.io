moteApp.filter('range', function(){
    return function(items, property, min, max) {
      	return items.filter(function(item){
        	return item[property] >= min && item[property] <= max;
      	});
	};
});