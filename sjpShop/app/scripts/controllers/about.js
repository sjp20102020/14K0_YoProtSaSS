'use strict';

/**
 * @ngdoc function
 * @name sjpShopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sjpShopApp
 */
angular.module('sjpShopApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.address = "London";
  });
