angular.module("cpu").directive('processorPanel', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			processors:"@"
		} ,// {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div class="row-floid">'+
				  	'<processorUsage ng-repeat="processor in processors" id="{{$index}}" value="{{processor.usage}}></processorUsage>"'+
			  	  '</div>' ,
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			// $scope.$watch($scope.processors[0].usage,function(){
			console.log("processorsPanel-"+scope.processors);
			// })
			
		}
	};
});