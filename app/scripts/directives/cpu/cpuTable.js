/*
* data item attrs: "computer","ip","os","cpu","usage"
*/
angular.module('cpu').directive('cpuTable', ['$http', function($http){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			title:"=",
			data:'=',
			head:'='
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<common-table data="data" head="head" title="title" rowClick="rowClick">'+
					'<processor-usage value="10"></processor-usage>'+
				  '</common-table>',
		// templateUrl: '',
		// replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs){

		// },
		link: function(scope, iElm, iAttrs, controller) {
			var row = iElm.find("tr#tRow");
			$("<td class='processor-usage value='10'></td>").append(row);
			scope.data.forEach(function(v,i){
				for(var k in v){
					v[k]={
						type:"text",
						text:v[k]
					}
				};
				v.usage = {
					type:"directive",
					directive:{
						name:'processor-usage',
						config:"test"
					}
				};
			})
			console.log(scope.data[0]);
			scope.rowClick = function(){
				alert("row");
			}
			
		},
	};
}]);