define([],function(){
	/*
	 所有的报provider找不到的错误均是在引用它的时候没有加载到相关的定义文件
	 * */
	return ["$scope","baseService","$state",function($scope,baseService,$state){
		$scope.user={
			 username:"zs",
			 password:"1"
		};
		$scope.login=function(){
			console.log(baseService);
			baseService.login().then(function(suc){
				
				console.log(suc.data,$scope.user);
				if(suc.data.name===$scope.user.username && suc.data.password===$scope.user.password){
					
					$state.go("appCenter",{name:$scope.user.username});
				}else{
					alert("用户名或者密码错误");
				}
			});
		};
	}];
	
});
