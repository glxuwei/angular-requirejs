define([],function(){
	
	return ["$scope","appService",function($scope,appService){
		
		appService.appMenu().then(function(reso){
			$scope.menuJson=reso.data;
		});
		
	}];
	
});
