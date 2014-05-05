define(['./mainService'],function(main){
	
	
	main.config(["$stateProvider","routeAnalyProvider",function($stateProvider,rap){
		
		$stateProvider.state(rap.analyze("main","main/",true));
		
	}]);
})
