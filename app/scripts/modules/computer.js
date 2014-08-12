/**
*  computer Module
*
* Description
*/
'use strict';
angular.module('computer', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/computer', {
        templateUrl: 'views/computer/computer.html',
        controller: 'ComputerCtrl'
  });});