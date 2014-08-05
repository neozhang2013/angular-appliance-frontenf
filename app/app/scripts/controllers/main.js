'use strict';

/**
 * @ngdoc function
 * @name applianceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applianceApp
 */
angular.module('applianceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
