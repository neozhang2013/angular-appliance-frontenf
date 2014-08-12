
angular.module('cpu',[]).controller('DBCpuCtrl', ['$scope','$interval','cpuFactory', function($scope,$interval,cpuFactory){
	$scope.usageTpl = "/views/dashboard/dashboard_BChart.html";
	$scope.chartTitle="CPU haha Usage";
	$scope.item = 0;
	$scope.length = 0;
	$scope.cpuData = {};
	$scope.processors=[];
	$scope.interval= $interval(function(){
				$scope.cpuData = cpuFactory.getCpuData();
				$scope.processors = $scope.cpuData.processors; 
				          			                			    						   
			},2000);
	$scope.stopInterval = function(){
		if($scope.interval){
			$scope.interval.cancel();
		}	
	};
	console.log($scope.processors);  

}]) 