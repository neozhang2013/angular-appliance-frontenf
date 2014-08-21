angular.module("cpu").controller('CpuCtrl', ['$scope', function($scope){
	$scope.title = "CPU STATUS LIST";
	$scope.data = [
					{usage:10,cpu:"intel core i7",Platforms:"windows 7",ip:"10.200.138.129",Computer:"early_bird"},
					{usage:20,cpu:"intel core i7",Platforms:"linux",ip:"10.200.138.123",Computer:"early_bird1"},
					{usage:30,cpu:"intel core i7",Platforms:"ubuntu",ip:"10.200.138.124",Computer:"early_bird2"}];
	$scope.head = ["Computer","IP Address","Platforms","cpu","usage"];
}])