require.config({
	baseUrl:"scripts/",
	paths:{
		"jquery":"../lib/jquery.min",
		"angular":"../lib/angular.min",
		"uiRouter":"../lib/angular-ui-router"
	},
	shim:{
		"angular":{
			exports:"angular"
		},
		"uiRouter":{
			deps:["angular"]
		}
		
	},
	urlArgs:'v=1.1'
	
	
});
require(['jquery','angular','app'],function(jQuery,angular){
	jQuery(function(){
		angular.bootstrap(document,['app']);
	});
});
