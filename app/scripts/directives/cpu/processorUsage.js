
angular.module('cpu').directive('processorUsage', ['$http', function($http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			value:"@",
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div style="{margin:auto}">'+
						'<input class="prcs" data-height="70" data-width="70" data-thickness=".2" data-skin="tron"  readonly/>'+
					'</div>',
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			var processor = iElm.find(".prcs");
			processor.val(scope.value);
			processor.knob("change");
		}
	};
}]);