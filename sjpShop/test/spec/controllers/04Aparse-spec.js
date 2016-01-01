'use strict';

xdescribe('04ASER module', function () {
  describe('parseService service', function () {
    var service;
    beforeEach(module('04ASER'));
    beforeEach(inject(function (parseService) {
      service = parseService;
    }));

    it('dummy', function () {
      //expect(service.authorName).toBe('Umur');
      expect(service.name).toBe('abc');
    });



  });
});
