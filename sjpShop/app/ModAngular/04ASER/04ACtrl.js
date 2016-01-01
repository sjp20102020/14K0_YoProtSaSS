angular.module('sjpShopApp')
  .controller('04ACtrl', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function (msg) {
      notify(msg);
    };
  }]);


