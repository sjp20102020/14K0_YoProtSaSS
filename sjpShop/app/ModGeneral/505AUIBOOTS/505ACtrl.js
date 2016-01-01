//https://www.youtube.com/watch?v=8WR_GdGHcLg
//https://github.com/angular-ui/ui-select
//docs https://github.com/angular-ui/ui-select/wiki/ui-select-choices

angular.module('sjpuiselect',['ui.select'])
  .controller('505ACtrl', function ($scope) {

    $scope.employee = {};
    $scope.employees =
    [
    { name: 'siddy', add: 'london'},
    {name: "cr", add: "london"}
    ];


  });

