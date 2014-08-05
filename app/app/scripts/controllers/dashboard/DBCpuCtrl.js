
angular.module('cpu',[]).controller('DBCpuCtrl', ['$scope', function($scope,$interval){
	$scope.usageTpl = "/views/dashboard/dashboard_BChart.html";
	$scope.chartTitle="CPU Usage";
}])