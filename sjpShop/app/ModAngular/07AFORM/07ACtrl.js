angular.module('sjpShopApp')
  .controller('07ACtrl', ['$scope', function ($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
       // $scope.user = {};
      };

      $scope.reset();
    }]);
