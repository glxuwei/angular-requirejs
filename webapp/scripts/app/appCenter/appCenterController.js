define([],function(){
	
	return ["$scope","$stateParams",function($scope,$stateParams){
		
		$scope.myAppCenter=($stateParams.name || "")+" welcome to appCenter!";
		$scope.TestOne=function(msg){
			
			return {
				
				testAry:[{id:"1",name:"zs"},{id:"2",name:"lis"},{id:"3",name:"ww"}],
				test_one:function(){
					console.log(msg);
				}
			};
			
		};
		$scope.testFunc=function(msg){
			
			console.log(msg);
		};
	}];
	
});
