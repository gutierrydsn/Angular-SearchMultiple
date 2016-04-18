angular
    .module('advancedSearch',[]).filter('searchMultiple',['$filter',function ($filter) {
	return function (data, searchCriteria) {
		var arrayFilter = [];		
		if(searchCriteria){
			angular.forEach(searchCriteria,function(searchText,searchAttribute){	
				var keyAttributeAndText = {}; 
				
			    keyAttributeAndText[searchAttribute] = searchText ? searchText : "";
			
				angular.forEach($filter('filter')(data, keyAttributeAndText),function(Object){
					if ((arrayFilter.indexOf(Object) === -1)){
						arrayFilter.push(Object);		
					}
				});				
			});		
		};		
		return arrayFilter;
	};
}]);