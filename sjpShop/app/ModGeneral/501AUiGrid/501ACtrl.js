//http://angular-ui.github.io/ui-grid/
//https://github.com/angular-ui/ui-grid

//example http://ui-grid.info/docs/#/tutorial/101_intro


// main.js

var app = angular.module('sjpUiGrid', ['ngTouch', 'ui.grid']);

app.controller('501ACtrl', ['$scope', function ($scope) {

  $scope.myData = [
    {
      "firstName": "Cox",
      "lastName": "Carney",
      "company": "Enormo",
      "employed": true
    },
    {
      "firstName": "Lorraine",
      "lastName": "Wise",
      "company": "Comveyer",
      "employed": false
    },
    {
      "firstName": "Nancy",
      "lastName": "Waters",
      "company": "Fuelton",
      "employed": false
    }
  ];
}]);
