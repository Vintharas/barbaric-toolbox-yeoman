'use strict';

/**
 * @ngdoc function
 * @name myFavoriteQuotesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFavoriteQuotesApp
 */
angular.module('myFavoriteQuotesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
