angular.module("dashboard").controller('QuickPanelCtrl', ['$scope','panelcards' ,function($scope,panelcards){
	$scope.panleCards=panelcards;

}])