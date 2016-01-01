//http://stackoverflow.com/questions/22666289/how-to-use-jquery-in-angularjs
/*
ui-bootsratp
http://joelhooks.com/blog/2013/07/27/using-angularjs-stop-using-jquery-as-a-crutch/
 https://github.com/angular-ui/bootstrap/tree/master/src
*/


angular.module('sjpShopApp')
  .controller('503ACtrl', function ($scope) {

    console.log(angular.element(".class1").text());
    console.log(angular.element(".class1").hide());
    angular.element("#sjpBtn2").click(function () {
      console.log("CLICK BTN2222");
    });
    angular.element("#sjpBtn3").on("click", function () {
      console.log("click from on333");
    });

/*
    $scope.model = 0;

    $scope.initSlider = function () {
      angular.element(function () {
        // wait till load event fires so all resources are available
        $scope.$slider = angular.element('#slider').slider({
          slide: $scope.onSlide
        });
      });

      $scope.onSlide = function (e, ui) {
        $scope.model = ui.value;
        $scope.$digest();
      };
    };

    $scope.initSlider();
*/

    $scope.clickbtn= function() {
      console.log("IN clickbtn11111");
    };

  });

