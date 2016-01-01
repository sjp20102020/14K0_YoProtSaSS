
angular.module('sjpShopApp')
     .controller('03BCtrl', ['$scope', function($scope) {
        $scope.timeOfDay = 'morning';
        $scope.name = 'Nikki';
      }])
    .controller('ChildController', ['$scope', function($scope) {
      $scope.name = 'Mattie';
    }])
    .controller('GrandChildController', ['$scope', function($scope) {
      $scope.timeOfDay = 'evening';
      $scope.name = 'Gingerbread Baby';
    }]);
