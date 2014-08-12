angular.module("computer")
	.controller('ComputerCtrl', ['$scope',function($scope){
		$scope.computers = [{
			name:'test1',
			cpu:'core i7',
			ram:'8G',
			disk:'1T'
		},
		{
			name:'test2',
			cpu:'core i7',
			ram:'8G',
			disk:'1T'
		},
		{
			name:'test3',
			cpu:'core i7',
			ram:'8G',
			disk:'1T'
		},
		{
			name:'test4',
			cpu:'core i7',
			ram:'8G',
			disk:'1T'
		}];
	}]);
