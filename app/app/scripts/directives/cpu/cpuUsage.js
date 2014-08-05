/**
* cpu Module
*
* Description
*/
angular.module('cpu').directive('cpuUsage', ['$interval','cpuFactory','$q', function($interval,$q,cpuFactory){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: true, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		//template: '',
		templateUrl: '/views/dashboard/dashboard_BChart.html',
		// replace: true,
		// transclude: true,
// 		compile: function($scope,iElm){
// 			
// 		},
		link: function($scope, iElm, iAttrs, controller,$q) {
			var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
              title:{
                  text: ""              
             },
              data: [              
              {
// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "Line",
                  dataPoints: $scope.data
              }
              ]
          });
			
			$scope.$watch($scope.data,function(){
				alert($scope.data.length);
				chart.render();
			});
		  	

		},
		controller:function($scope,cpuFactory,$interval,$q){
			$scope.chartTitle="CPU usage";
			$scope.data = [];
			var deferred = $q.defer();
			$interval(function(){
				var cpu =cpuFactory.getCpuUsage();
                $scope.data.push(cpu);
                alert(cpu =cpuFactory.getCpuUsage().x);
			},2000);		
	}
};
}]);

angular.module("cpu").factory('cpuFactory', ['$interval','$http', function($interval,$http){
	 return{
		getCpuUsage : function(){
	        function cpuUsage(x,y){
				this.x = x;
				this.y = y;
			}
			var cpu1 = new cpuUsage(0,0);
			 $http({
        			url: 'http://10.200.120.128:8080/earlybird/cpu/getRealtimeUsage.do',
        				method: "get",
        				withCredentials: false,
				        headers: {
				                    'Content-Type': 'application/json; charset=utf-8'
				        }
    			}).success(function(data) {
    				 cpu1.x=data.date;
    				 cpu1.y=data.tptal_usage;			// 
  			 }); 
			
			return cpu1;
		}
	};
}]);