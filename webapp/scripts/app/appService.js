define(["angular"],function(ng){
	
	
	return ng.module("app.module",[]).factory("appService",["$http",function($http){
		
		return {
			
			appMenu:function(){
				
				return $http.get("data/menu.json");
			}
		};
		
	}]);
	
});
