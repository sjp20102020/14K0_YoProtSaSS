'use strict';


describe('Testing services', function() {

  var service;

  beforeEach(module('04ASER'));

  beforeEach(inject(function(testService) {
    service = testService;
  }));

  it ('should be loaded', function() {
    expect(service).toBeDefined();
  });

  it ('should return get data when calling getData', function() {
    expect(service.getData()).toBe('some data');
  });

  it('should return 20 when getX is called', function () {
    expect(service.getX()).toBe(20);
  });


  it('should return 50 when add is called with 30 and 20', function () {
    expect(service.add(30, 20)).toBe(50);
    expect(service.met1()).toBe(6);
  });




});
