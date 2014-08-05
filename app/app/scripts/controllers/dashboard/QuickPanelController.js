angular.module("dashboard",["cpu"]).controller('QuickPanelCtrl', ['$scope' ,function($scope){
	$scope.panleCards=[
						{name:'CPU',url:'/cpu',icon:'film',color:'primary'},
						{name:'Disk',url:'/disk',icon:'hdd-o',color:'green'},
						{name:'Net',url:'/Net',icon:'sitemap',color:'red'},
						{name:'services',url:'/services',icon:'cogs',color:'yellow'}
					];

}])