/**
* cpu Module
*
* Description
*/
angular.module('cpu').directive('cpuUsage', ['$http', function($http){
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
		// compile: function($scope,iElm){},
		// link: function($scope, iElm, iAttrs, controller) {
		// 	//iElm.load($scope.usageTpl);
		// },
		controller:function($scope){
			$scope.chartTitle="CPU usage";
		}
	};
}]);