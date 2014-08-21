angular.module("computer")
	.controller('ComputerCtrl', ['$scope','$interval','ComputerCRUD',function($scope,$interval,ComputerCRUD){
		var insterval = $interval(function(){
		$scope.computers=ComputerCRUD.getAllComputers();
	},2000);
	}]);
