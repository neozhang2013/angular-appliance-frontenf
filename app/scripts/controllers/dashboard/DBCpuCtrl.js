
angular.module('cpu',[]).controller('DBCpuCtrl', ['$scope', function($scope){
	$scope.usageTpl = "/views/dashboard/dashboard_BChart.html";
	$scope.chartTitle="CPU Usage";
	alert("views/dashboard/dashboard_BChart.html");
}])