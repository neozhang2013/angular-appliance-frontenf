
angular.module('cpu',[]).controller('DBCpuCtrl', ['$scope','$interval','cpuFactory', function($scope,$interval,cpuFactory){
	//$scope.usageTpl = "/views/dashboard/dashboard_BChart.html";
	//$scope.chartTitle="CPU haha Usage";
	$scope.item = 0;
	$scope.length = 0;
	$scope.cpuData = {};
	$scope.processors=[];
	$scope.totalUsage={};
	$scope.time="";
	$scope.interval= $interval(function(){
				$scope.cpuData = cpuFactory.getCpuData();
				$scope.totalUsage={y:$scope.cpuData.total_usage,x:$scope.cpuData.timestamp};
				// $scope.totalUsage = {y:Math.random(0,1),x:Date.now()};
				$scope.time = Date.now();
				$scope.processors = $scope.cpuData.processors;
				console.log($scope.totalUsage);            			                			    						   
			},2000);
	$scope.stopInterval = function(){
		if($scope.interval){
			$scope.interval.cancel();
		}	
	};
	console.log($scope.processors);  

}]) 