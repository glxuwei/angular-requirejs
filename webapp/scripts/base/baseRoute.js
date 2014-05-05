define(["./baseService"],function(base){
	
	base.config(["$stateProvider","routeAnalyProvider",function($stateProvider,rap){
		
		$stateProvider.state(rap.analyze("login","","base/"))
		.state(rap.analyze("register","/register","base/"));
		
	}]);
	
});
