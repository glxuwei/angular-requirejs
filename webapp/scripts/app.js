define(['angular','uiRouter','../config/route-analysis','./common/commonBootstrap','./base/baseRoute','./main/mainRoute','./app/appRoute'],function(ng){
	
	return ng.module("app",['ui.router','route.module','common.module','base.module','main.module','app.module']);
	
});
