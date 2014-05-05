'use strict';
define(['angular'], function(angular) {
	var routeResolve = angular.module('route.module', []);
	routeResolve.config(["$controllerProvider", "$provide",
	function($controllerProvider, $provide) {
		$provide.provider('routeAnaly', function() {
			this.$get = function() {
				return this;
			};
			var viewsDir = "views/";
			var ctrlsDir = "scripts/";
			this.setBaseDir = function(viewDir, ctrlDir) {
				viewsDir = viewDir;
				ctrlsDir = ctrlDir;
			};
			this.getViewsDir = function() {
				return viewsDir;
			};
			this.getCtrlsDir = function() {
				return ctrlsDir;
			};
			this.analyze = function() {
				var baseName, url, path, routeDef = {};
				baseName = arguments[0];
				routeDef.name = baseName;
				if (arguments.length < 2 || arguments.length > 5) {
					console.error("params error");
					return false;
				} else if (arguments.length === 2) {
					( typeof arguments[1] === "boolean" && arguments[1]) && (routeDef.abstract = arguments[1]);
					typeof arguments[1] !== "boolean" && (routeDef.url = arguments[1]);
				} else if (arguments.length === 3) {
					if (arguments[1].indexOf("\/") !== 0 && arguments[1].indexOf("\/") !== -1) {
						path = arguments[1];
						( typeof arguments[2] === "boolean" && arguments[2]) && (routeDef.abstract = arguments[2]);
						typeof arguments[2]==="string" && (routeDef.parent=arguments[2]);
					} else if(typeof arguments[1]==="boolean" && arguments[1]){
						routeDef.abstract=arguments[1];
						routeDef.parent=arguemnts[2];
					}else{
						routeDef.url = arguments[1];
						if(typeof arguments[2]==="boolean" && arguments[2]){
							routeDef.abstract = arguments[2];
						}else if(arguments[2].indexOf("\/")!=-1){
							path=arguments[2];
						}else{
							routeDef.parent=arguments[2];
						}
					}
				} else if(arguments.length===4){
					
					if(arguments[1].indexOf("\/") !== 0){
						path=arguments[1];
						routeDef.abstract=arguments[2];
						routeDef.parent=arguments[3];
					}else{
						routeDef.url=arguments[1];
						if(arguments[2].indexOf("\/")>-1){
							path=arguments[2];
							if(typeof arguments[3]==="string"){
								routeDef.parent=arguments[3];
							}else{
								routeDef.abstract=arguments[3];
							}
						}else{
							routeDef.abstract=arguments[2];
							routeDef.parent=arguments[3];
						}
					}
				}else if(arguments.length===5){
					routeDef.url = arguments[1];
					path = arguments[2];
					( typeof arguments[3] === "boolean") && (routeDef.abstract = arguments[3]);
					routeDef.parent=arguments[4];
				}
				routeDef.templateUrl = viewsDir + path + baseName + '.html';
				routeDef.controller = baseName + 'Ctrl';
				routeDef.resolve = {
					load : ['$q', '$rootScope',
					function($q,$rootScope) {
						var def = $q.defer();
						var ctrlUrl = ctrlsDir + path + baseName + 'Controller.js';
						require([ctrlUrl], function(c) {
							$controllerProvider.register(routeDef.controller,c);
							$rootScope.$apply();
							def.resolve();
						});
						return def.promise;
					}]
				};
				return routeDef;
			};
		});
	}]);
});
