define(["./commonModule"],function(common){
	
	
	common.directive("testOne",["$compile",function($compile){
		
		return {
			
			scope:{
				fromSome:"&testOne",
				fnTestOne:"&testFunc"
			},
			template:"<div>{{testOne}}</div>",
			replace:true,
			link:function(scope,ele,attrs){
				scope.testOne="this is testOne directive";
				scope.testAry=scope.fromSome().testAry;
				// scope.test_one=scope.fromSome().test_one;
				var templateOne="<div><ul><li ng-repeat='row in testAry'>\
								<a href='javascript:void(0)' ng-click='fnTestOne({msg:row})'>{{row.name}}</a></li></ul></div>";
				var jq_temp=jQuery(templateOne);
				ele.append(jq_temp);
				$compile(jq_temp)(scope);
				
			}
			
		};
		
	}]);
	
	
});
