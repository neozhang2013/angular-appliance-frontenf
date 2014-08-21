/**
*  Module common
*  use strict
* Description
*/
'use strict';
angular.module('common', []).config(function($routeProvider) {
	$routeProvider.when('/',{templateUrl:''});
}).
constant(
	'commonmenu', 
	[
		
		{
			name:'Dashboard',url:'/',icon:'dashboard'
		},
		{name:'Monitor',url:'/',icon:'video-camera',child:
			[
				{name:'CPU',url:'/#/cpu',icon:'film'},
				{name:'Disk',url:'/disk',icon:'hdd-o'},
				{name:'Net',url:'/Net',icon:'sitemap'},
				{name:'Services',url:'/services',icon:'cogs'}
			]
		},
		{name:'Management',url:'/#/computer',icon:'puzzle-piece',child:
			[
				{name:'Computer',url:'/#/computer',icon:'desktop'}
			]
		},
		{name:'Settings',url:'/#/Settings',icon:'cogs'}
	]
);