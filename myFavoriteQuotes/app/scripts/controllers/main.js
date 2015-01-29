(function(myApp) {

  'use strict';

  /**
   * @ngdoc function
   * @name myFavoriteQuotesApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the myFavoriteQuotesApp
   */
   myApp.controller('MainCtrl', function ($scope, quotesService) {
     $scope.tags = '';
     $scope.quotes = quotesService.getQuotes();
     $scope.newQuote = quotesService.getNewQuote();
     $scope.addNewQuote = function addNewQuote() {
       if ($scope.tags) {
         $scope.newQuote.tags = $scope.tags.split(',').map(function (tag) { return tag.trim(); });
       }
       if (!$scope.newQuote.author) {
         $scope.newQuote.author = 'Unkown';
       }
       $scope.quotes.unshift($scope.newQuote);
       $scope.tags = '';
       $scope.newQuote = quotesService.getNewQuote();
     };
   });

}(window.myApp));
