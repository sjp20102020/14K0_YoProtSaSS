angular.module('sjpShopApp')
  .controller('07CCtrl', ['$scope', function ($scope) {

      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
