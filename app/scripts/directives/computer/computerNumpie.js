angular.module("computer")
.directive('computerNumpie', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			total:"@",
			connected:"@"
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/views/computer/computerNumpie.html',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {

			scope.config = {
				  theme: "theme2",
	              data: [              
		              {
		// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
		                  type: "pie",
		                  dataPoints:[
		                  	{
		                  		y:scope.connected,
		                  		indexLable:"on line"

		                  	},
		                  	{
		                  		y:scope.total-scope.connected,
		                  		indexLable:"off Line"
		                  	}
		                  ]
		              }
	              ]
          };

   		  scope.$watch("total",function(){
   		  	scope.render = true;
   		  	scope.config.data[0].dataPoints[0].y=scope.connected;
   		  	scope.config.data[0].dataPoints[1].y=scope.total-scope.connected;
   		  	console.log("watch total"+scope.total);
   		  })
			}

	};
});