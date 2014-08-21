angular.module('common').directive('commonTable', ['$http', function($http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			title:'=',
			data:'=',
			head:'=',
			rowClick:"&"
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/views/common/table.html',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			var directive = iElm.find("div");
			scope.data.forEach(function(v,i){
				for(var item in v){
					if(v[item].type != "directive"){
						continue ;
					}
					
				}
			})
			console.log(directive);
		},
		controller:function($scope){

		}
	};
}]);