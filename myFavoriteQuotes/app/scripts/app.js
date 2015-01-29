(function (window) {
  'use strict';

  /**
   * @ngdoc overview
   * @name myFavoriteQuotesApp
   * @description
   * # myFavoriteQuotesApp
   *
   * Main module of the application.
   */
  var myApp = angular
      .module('myFavoriteQuotesApp', [
          'ngAnimate',
          'ngCookies',
          'ngResource',
          'ngRoute',
          'ngSanitize',
          'ngTouch'
      ])
      .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
      });

  window.myApp = myApp;
}(window));
