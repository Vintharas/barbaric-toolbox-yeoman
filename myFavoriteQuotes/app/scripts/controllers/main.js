'use strict';

/**
 * @ngdoc function
 * @name myFavoriteQuotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFavoriteQuotesApp
 */
angular.module('myFavoriteQuotesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
