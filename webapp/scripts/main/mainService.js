define(['angular'],function(ng){
	
	return ng.module("main.module",[]).factory("mainService",["$http",function($http){
		
		return {
			mainNav:function(){
				return $http.get("data/menu.json");
			}
		};
		
	}]);
})
