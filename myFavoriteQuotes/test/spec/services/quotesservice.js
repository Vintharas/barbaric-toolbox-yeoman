'use strict';

describe('Service: quotesService', function () {

  // load the service's module
  beforeEach(module('myFavoriteQuotesApp'));

  // instantiate service
  var quotesService;
  beforeEach(inject(function (_quotesService_) {
    quotesService = _quotesService_;
  }));

  it('should do something', function () {
    expect(!!quotesService).toBe(true);
  });

});
