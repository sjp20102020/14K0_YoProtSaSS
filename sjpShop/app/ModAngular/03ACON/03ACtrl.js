
    angular.module('sjpShopApp')
      .controller('03ACtrl', ['$scope', function($scope) {
          $scope.spice = 'very';

          $scope.chiliSpicy = function() {
            $scope.spice = 'chili';
          };

          $scope.jalapenoSpicy = function() {
            $scope.spice = 'jalapeño';
          };

        $scope.todayRate = function() {
          return 200.33;
        };

        $scope.total =0;
        $scope._val1=0;
        $scope._val2=0;
        $scope.add = function (val1, val2) {
          $scope.total = val1 + val2
        };

        $scope.add2 = function () {
          $scope.total2 = parseInt($scope._val1) + parseInt($scope._val2);

        };
        }]);
