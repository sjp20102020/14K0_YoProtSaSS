'use strict';

describe('Controller: 01BSpec', function () {

  // load the controller's module
  beforeEach(module('sjpShopApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('01BCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have qty defaulted to 1', function () {
    expect(MainCtrl.qty).toBe(1);
    expect(MainCtrl.cost).toBeDefined();
    expect(MainCtrl.total('CNY')).toBeDefined();

  });
});
