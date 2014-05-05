define(["./appService"],function(app){
	
	app.config(["$stateProvider","routeAnalyProvider",function($stateProvider,rap){
		//baseName,url,path,bool,parent
		$stateProvider.state(rap.analyze("app","app/",true))
		.state(rap.analyze("appCenter","/appCenter?name","app/appCenter/","app"));
		
	}]);
	
});
