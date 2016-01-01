//http://www.sitepoint.com/practical-guide-angularjs-directives/
//http://www.ng-newsletter.com/posts/directives.html



var app=angular.module('sjpShopApp');

  app.controller('08ACtrl', ['$scope', function ($scope) {

    $scope.myName = "siddy";
    $scope.myAdd = "Lond";

    $scope.student = {
      name: "Gavin",
      age: 6,
      subject: [
        "math",
        "geography"
      ]
    }

    $scope.setGrade = function (student) {
      student.grade = "A+"
    }

    $scope.format = 'M/d/yy h:mm:ss a';

    }]);


app.directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,


    //template: '<p style="background-color:{{color}}">Hello World',
    template: '<div style="background-color:{{color}}">hiiii</div> ',

    link: function (scope, elem, attrs) {
      elem.on('click', function () {  //elem.bind or elem.on can be used.
       elem.css('background-color', 'blue');
        scope.$apply(function () {//http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
          scope.color = "blue";
        });
      });
      elem.on('mouseover', function () {
        elem.css('cursor', 'pointer');
      });
    }
  }

});



 app.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

    function link(scope, element, attrs) {
      var format,
        timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.myCurrentTime, function(value) {
        console.log(value);
        format = value;
        updateTime();
      });

      /*element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });*/

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }

    return {
      link: link
    };
  }]);




/*
//not working

app.directive('childScope', function () {
  return {
    restrict: 'EA', //E = element, A = attribute, C = class, M = comment
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      title: '@'
    },
    template: '<div>{{ myVal }}</div>',
    templateUrl: 'mytemplate.html',
    controller: controllerFunction, //Embed a custom controller in the directive
    link: function ($scope, element, attrs) { } //DOM manipulation
  }
});*/

/*
//not working ...not sure ??
////http://www.ng-newsletter.com/posts/directives.html
app.directive('directiveController', function() {
  return {
    restrict: 'AE',
    //require: '^ngCity',
    scope: {
      ngCity: '@'
    },
    //template: '<div>in directiveController</div>',
     template: '<div ><h4>Weather for {{ngCity}}</h4></div>',
    controller: ['$scope', '$http', function($scope, $http) {
     var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&callback=JSON_CALLBACK&q="

     $scope.getTemp = function(city) {
     $http({
     method: 'JSONP',
     url: url + city
     }).success(function(data) {
     var weather = [];
     angular.forEach(data.list, function(value){
     weather.push(value);
     });
     $scope.weather = weather;
     });
     }
     }],
     link: function(scope, iElement, iAttrs, ctrl) {
     scope.getTemp(iAttrs.ngCity);
     }
  };
});*/
