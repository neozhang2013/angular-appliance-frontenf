angular.module('computer').controller('DBComputerCtrl', ['$scope','$interval','ComputerCRUD',function($scope,$interval,ComputerCRUD){	
	$scope.insterval = $interval(function(){
		$scope.computers=ComputerCRUD.getAllComputers();
		console.log('DBComputerCtrl--getAllComputers:'+$scope.computers);
		$scope.onlineComputers=ComputerCRUD.getOnlineComputers();
		console.log('DBComputerCtrl--getOnlineComputers:'+$scope.computers);
		$scope.total = $scope.computers.length;
		$scope.online = $scope.onlineComputers.length
		console.log($scope.online);
	},100,2);
}])