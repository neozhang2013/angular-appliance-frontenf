angular.module('common').directive('commonSidebar',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: true, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '/views/common/sidebar.html',
		// replace: true,
		// transclude: true,
		compile: function(Elmt){
			var menu=[
				{name:'Dashboard',url:'/dashboard',icon:'dashboard',child:
					[
						{name:'CPU',url:'/cpu',icon:'film'},
						{name:'Disk',url:'/disk',icon:'hdd-o'},
						{name:'Net',url:'/Net',icon:'sitemap'},
						{name:'Services',url:'/services',icon:'cogs'}
					]
				},
				{name:'CPU',url:'/cpu',icon:'film',child:
					[
						{name:'realtime',url:'/cpu/realtime'},
						{name:'process',url:'/cpu/process'}
					]
				},
				{name:'Disk',url:'/disk',icon:'hdd-o'},
				{name:'Net',url:'/Net',icon:'sitemap'},
				{name:'Services',url:'/services',icon:'cogs'}

			];
			var menuLevlStyleList = ["nav","nav nav-second-level","nav nav-third-level"]
			var addSubmenu = function(Elmt,menu,level){
				    var ul= angular.element("<ul></ul>").addClass(menuLevlStyleList[level]);
				    if(level==0){
				    	ul.attr("id","side-menu");
				    }
					Elmt.append(ul);
					
					for( var item in menu){
						var li = angular.element("<li></li>")
						// ul.append("<li><a href='"+menu[item].url+"'>"+menu[item].name+"<span class='fa arrow'></span></a></li>");
						if(menu[item].child!=null&&menu[item].child != undefined){
							li.append("<a href='#'>"+"<i class='fa fa-"+menu[item].icon+" fa-fw'></i>"+menu[item].name+"<span class='fa arrow'></span></a>");
						    addSubmenu(li,menu[item].child,level+1);
						}
						else{
							li.append("<a href='"+menu[item].url+"'>"+"<i class='fa fa-"+menu[item].icon+" fa-fw'></i>"+menu[item].name+"</a>")
						}
						ul.append(li);
					}			
				};
			var sidebar = Elmt.find('div.sidebar-nav');
			addSubmenu(sidebar,menu,0);
			angular.element("#side-menu").metisMenu();	
			
		},
		link: function($scope, Elmt, iAttrs, controller) {			
    			
		 },
		controller:function($scope){
			
			$scope.select= function(index){
				$scope.currentIndex = index;
			};
		}
	};
});