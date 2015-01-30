(function(myApp) {

  'use strict';

  /**
   * @ngdoc function
   * @name myFavoriteQuotesApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the myFavoriteQuotesApp
   */
   myApp.controller('MainCtrl', function (quotesService) {
     var self = this;

     function addNewQuote() {
       if (self.tags) {
         self.newQuote.tags = self.tags.split(',').map(function (tag) { return tag.trim(); });
       }
       if (!self.newQuote.author) {
         self.newQuote.author = 'Unkown';
       }
       self.quotes.unshift(self.newQuote);
       self.tags = '';
       self.newQuote = quotesService.getNewQuote();
     }

     this.tags = '';
     this.quotes = quotesService.getQuotes();
     this.newQuote = quotesService.getNewQuote();
     this.addNewQuote = addNewQuote;

   });

}(window.myApp));
