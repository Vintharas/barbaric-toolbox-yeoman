(function (myApp) {
  'use strict';

  /**
   * @ngdoc service
   * @name myFavoriteQuotesApp.quotesService
   * @description
   * # quotesService
   * Service in the myFavoriteQuotesApp.
   */
  myApp.service('quotesService', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function Quote(text, author, tags) {
      this.text = text;
      this.author = author;
      this.tags = tags || [];
    }

    function getQuotes() {
      return [
        new Quote('Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind.', 'Dr. Seuss', ['inspiration', 'love']),
        new Quote('Whenever you find yourself on the side of the majority, it is time to pause and reflect.', 'Mark Twain', ['reflection', 'wisdom']),
        new Quote('You\'ve gotta dance like there\'s nobody watching,\n Love like you\'ll never be hurt,\n Sing like there\'s nobody listening,\n And live like it\'s heaven on earth.', 'Willian W. Purkey', ['inspiration', 'life'])
      ];
    }

    function getNewQuote() {
      return new Quote();
    }

    return {
      getQuotes: getQuotes,
      getNewQuote: getNewQuote
    };

  });

}(window.myApp));
