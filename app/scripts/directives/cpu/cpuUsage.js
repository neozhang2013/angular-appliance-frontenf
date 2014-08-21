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
		// compile: function($scope,iElm){
			
		// },
		link: function($scope, iElm,iAttr,$interval) {
			$scope.chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
              AxisX:{
              	valueFormatString:"DD,HH:mm:ss",
              	interval:1,
              	intervalType:"second"
              },
              title:{
                  text: "cpu usage"              
             },
              data: [              
              {
// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "line",
                  dataPoints: $scope.data
              }
              ]
          });
		},
		controller:function($scope,$interval,$q,cpuFactory){
			$scope.chartTitle="CPU usage";
			$scope.data =[] ;
			$scope.$watch("totalUsage",function(){
				$scope.data.push($scope.totalUsage);
				if($scope.data.length>10){
		    			$scope.data.shift();
		    			console.log("0: "+$scope.data[0].x);
		    		    console.log("1: "+$scope.data[1].x);
			    		
		    		}
				if($scope.chart&&$scope.data.length>5){
			    			$scope.chart.render();
			    		}
			}, true);
			
	}
};
}]);

angular.module("cpu").factory('cpuFactory', ['$interval','$http','$q', function($interval,$http,$q){
	var cpuFactory ={};
    var deffered = $q.defer();
    var cpuData = {};
	cpuFactory.getCpuData = function(){

		$http({
        			url: 'http://10.200.138.73:8080/earlybird/cpu/getRealtimeUsage.do',
        				method: "get",
        				withCredentials: false,
				        headers: {
				                    'Content-Type': 'application/json; charset=utf-8'
				        }
    			}).success(function(data) {
    				
    				cpuData = data;
    				//return cpuUsage;
  			 })
		return cpuData;
	};
	return cpuFactory;

}]);