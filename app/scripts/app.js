'use strict';

/**
 * @ngdoc overview
 * @name applianceApp
 * @description
 * # applianceApp
 *
 * Main module of the application.
 */
angular
  .module('applianceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'common',
    'dashboard',
    'computer',
    'cpu'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/common/dashboard.html',
        controller: 'QuickPanelCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
