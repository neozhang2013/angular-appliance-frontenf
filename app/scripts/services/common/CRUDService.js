angular.module("common").factory('CRUDService', ['$http','$resource' ,function($http,$resource){
	return {
	 getData: function(url,getResult){
			$http({
				url:url,  
				method:"get",
				withCredentials: false,
		        headers: {
		                    'Content-Type': 'application/json; charset=utf-8'
		        }
			}).success(function(data){
				if(typeof(getResult)=="function"){
					getResult(data);
					console.log(data);
				}
				else{
					console.log("getResult is not a function");
				}
			}).error(function(){
					console.log(url+'failed');
				}
			);	
		},
	getResource:function(url){
		return $resource(url,{ query: { method: 'GET',isArray: true} });
	}
	};
}])