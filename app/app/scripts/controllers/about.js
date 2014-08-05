'use strict';

/**
 * @ngdoc function
 * @name applianceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the applianceApp
 */
angular.module('applianceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
