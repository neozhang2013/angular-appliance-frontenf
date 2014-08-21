angular.module('common').directive('canvasjsChart',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			config:"=",
			chartid:"@",
			render:"="
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div   render="render" style="height:300px,width:100%">'+  
            		'</div>',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			iElm.attr("id",scope.chartid);		    
		    scope.$watch("render",function(){

		    	if(scope.config.data){
		    		var chart = new CanvasJS.Chart(scope.chartid,scope.config);
		    		 chart.render();
		    		 scope.render=false;
		    	}   	
		    	scope.config.render = false;
		    })
		}
	};
});