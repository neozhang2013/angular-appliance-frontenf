
angular.module('cpu').directive('processorUsage', ['$http', function($http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			value:"=",
			id:"="
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div class="knob-slider">' +
							'<canvas height="75" width="75" ></canvas>' +
							'<input class="prcs" data-height="75" data-width="75" data-thickness=".2" data-skin="tron"  readonly/>'+
					'</div>',
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			var processor = iElm.find("#"+scope.id);
			processor.attr("value",scope.value);
			processor.knob();
		}
	};
}]);