define(['angular'],function(ng){
	
	return ng.module("base.module",[]).factory("baseService",["$http",function($http){
		
		return {
			
			login:function(){
				
				return $http.get("data/user.json");
			}
		};
		
	}]);
});
