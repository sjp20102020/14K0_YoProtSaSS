/*
 *

 app.directive('helloWorld', function() {
 return {
 scope: true,  // use a child scope that inherits from parent
 restrict: 'AE',
 replace: 'true',
 template: '<h3>Hello World!!</h3>'
 };
 });

 */



/*

 app.directive('helloWorld', function() {
 return {
 scope: {},  // use a new isolated scope
 restrict: 'AE',
 replace: 'true',
 template: '<h3>Hello World!!</h3>'
 };
 });


 * */

//http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2015/06/11/understanding-scopes-in-angularjs-custom-directives.aspx
var app = angular.module('sjpShopApp');
app.controller('08BCtrl', ['$scope', '$log', function ($scope, $log) {
  $scope.parentName = "I am Parent";
  $scope.setParentName = function () {
    $scope.parentName = 'I am Parent new';
  }
  $scope.parentCust1 = {
    pCusName: "Jack11 old",
    pCusTel : "000000001"
  };
  $scope.parentCust2 = {
    pCusName: "Jack22 old",
    pCusTel : "000000002"
  };

  $scope.Tax1 =0;
  $scope.parentGetTax1 = function () {
    $scope.Tax1+= 10000;
  }
  $scope.Tax2 =0;
  $scope.parentGetTax2 = function () {
    $scope.Tax2+= 20000;
  }

  $scope.ukAddr1;
  $scope.findUKAddr1= function (hNo, pCode) {
    $scope.ukAddr1 = hNo + ',' + pCode;
  };

  $scope.ukAddr2;
  $scope.findUKAddr2= function (hNo, pCode) {
    $scope.ukAddr2 = hNo + ',' + pCode;
  };



  $log.info("in sjpShop..........ctrl........")
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


  $scope.product1 = {
    name: 'Phone',
    price: '100',
    stock: true
  };
  $scope.product2 = {
    name: 'TV',
    price: '1000',
    stock: false
  };
  $scope.product3 = {
    name: 'Laptop',
    price: '800',
    stock: false
  };
  $scope.ShowData = function () {
    console.log("====in ShowData===============");
    alert("Display Data");
  }

  $scope.ShowDataParam = function (msg) {
    console.log("====in ShowData===============");
    alert(msg);
  }


  $scope.submitHandler = function (firstName, lastName) {
    console.log("===========callAsFunctionWithLink============");
    console.log(firstName + "=========" + lastName);


  };


  $scope.items = [
    {Text: 'Item 1', Value: 'Url1'},
    {Text: 'Item 2', Value: 'Url2'}
  ];

  $scope.AlertTransition = function (index) {
    $log.info("in AlertTransition");
    console.log("Transitioning to " + $scope.items[index].Value);
  };


}]);


app.directive('basicScope', function () {
  return {
    template: '<div class="class08A1">basicScope =====> my name is {{myName}}, my Address is {{myAdd}}</div>'
  }
});


app.directive('basicScope2', function () {
  //isolated scope:{}
  //link $scope is part of the controller $scope
  function link($scope, elem, attrs, ctrl) {
    $scope.childName = "I am Child"
    $scope.setChildName = function () {
      $scope.childName = 'I am Child New';
    }

  }
  //{{childName}}: only available and can change via directive template
  //{{childName}}: not directly available in the html for bindings
  //{{childName}}: available in html with pass by =, @ , &.
  //{{childName}}: only one instance will change.

  //{{parentName}} : not available in  directive
  //{{parentName}} : available in html(as it belongs to ctrl)
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    template: "<span>Current childName = {{childName}}" +
    "<a href='' class='btn' ng-click='setChildName()'>Change childName</a><br> " +
    "Current parentName = {{parentName}} " +
    "<a href='' class='btn' ng-click='setParentName()'>Change setParentName</a><br> " +
    " </span>",
    link: link,
  }
});


app.directive('basicScope3', function () {
  //isolated scope:{}
  //link $scope is part of the controller $scope
  function link($scope, elem, attrs, ctrl) {
    $scope.childName = "I am Child"
    $scope.setChildName = function () {
      $scope.childName = 'I am Child New';
    }

  }

  return {
    restrict: 'E',
    scope: {
      pCusName: '@',
      parentCust: '=',
      taxClick: '&',
      findAddr : '&'

    },
    replace: true,
    template: "<span>Current childName = {{childName}}" +
    "<a href='' class='btn' ng-click='setChildName()'>Change childName</a><br> " +
    "Current parentName = {{parentName}} " +
    "<a href='' class='btn' ng-click='setParentName()'>Change setParentName</a><br> " +
    " Parent pCusName:  {{pCusName}}<br> " +
    "Parent Object parentCust {{parentCust}} or <br>" +
    " detail {{parentCust.pCusName}}<br>" +
      "<a href='' ng-click='taxClick()' >click for tax</a><br>" +
      "HouseNo <input type='text' ng-model='houseNo' />" +
    "Postcode <input type='text' ng-model='postCode' />" +
    " <a href='' ng-click='findAddr({hNo: houseNo, pCode : postCode})' >getAddr</a>  " +
    "</span>",
    link: link,
  };
});




//http://www.infragistics.com/community/blogs/dhananjay_kumar/archive/2015/06/11/understanding-scopes-in-angularjs-custom-directives.aspx

app.directive('sharedDefaultScope', function () {
  return {
    scope: false, //scope: false  //shared scope & default scope
    //scope: true, //scope: true  //// use a child scope that inherits from parent
    // scope: {}, //// use a new isolated scope

    template: '<div> in sharedDefaultScope  = {{student.name}} is {{student.age}} years old </div> ',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      console.log($scope);
    }
  }
});

app.directive('sharedInheritedChildScope', function () {
  return {
    //scope: false, //scope: false  //shared scope & default scope
    scope: true, //scope: true  //// use a child scope that inherits from parent
    // scope: {}, //// use a new isolated scope

    template: '<div> in sharedInheritedChildScope  = {{student.name}} is {{student.age}} years old </div> ',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      console.log($scope);
    }
  }
});

app.directive('isolatedScope', function () {
  return {
    //scope: false, //scope: false  //shared scope & default scope
    //scope: true, //scope: true  //// use a child scope that inherits from parent
    scope: {}, //// use a new isolated scope

    template: '<div> in isolatedScope  = {{student.name}} is {{student.age}} years old </div> ',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      console.log($scope);
    }
  }
});


app.directive('isolatedScopePassString', function () {
  return {
    restrict: 'E',
    scope: {
      name: '@',// <isolated-scope-pass-string name="{{product1.name}}" price="{{product1.price}}"</isolated-scope-pass-string>
      price: '@'
    },
    template: 'isolatedScopePassString name is  {{name}}  price is {{price}} '
  };
});

app.directive('isolatedScopePassObject', function () {
  return {
    restrict: 'E',
    scope: {
      data: '='    //<isolated-scope-pass-object data="product1"></isolated-scope-pass-object>
    },
    template: 'isolatedScopePassObject data.name is {{data.name}} , data.price is  {{data.price}}  '
  };
});


app.directive('isolatedScopePassObject2', function () {
  return {
    restrict: 'E',
    scope: {
      data: '=',  //<isolated-scope-pass-object data="product1"></isolated-scope-pass-object>

      customer1: {//do not work
        name: "siddy",
        add: "London"
      }

    },
    template: 'isolatedScopePassObject2 data.name is {{data.name}} , data.price is  {{data.price}} and {{customer1}} '
  };
});


app.directive('isolatedScopePassObject3', function () {
  function link($scope, elem, attrs, ctrl) {
    $scope.name3 = "siddy"
    $scope.setName3 = function () {
      $scope.name3 = 'peter new';
    }
  }

  return {
    restrict: 'E',
    scope: {
      data: '='    //<isolated-scope-pass-object data="product1"></isolated-scope-pass-object>
    },
    template: 'isolatedScopePassObject3 data.name is {{data.name}} ' +
    ' and name3 from isolate scope is {{name3}} ' +
    ' and product3 from sharedscope is  {{product3}}',
    link: link
  };
});


//http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-3-isolate-scope-and-function-parameters
//https://egghead.io/lessons/angularjs-isolate-scope-expression-binding
//isolatedScopeCallAsFunction
app.directive('isolatedScopeCallAsFunction', function () {
  return {
    restrict: 'EA',
    scope: {
      callme: '&',  //<isolated-scope-call-as-function  callme="ShowData()"></isolated-scope-call-as-function>
      //or <div isolated-scope-call-as-function callme="ShowData()">in</div>
    },
    template: '<div ng-click="callme()"> click me</div> '
    // template: 'isolatedScopeCallAsFunction ng-click="callme()" '  //do not work
  };
});


app.directive('callAsFunctionWithParam', function () {
  return {
    restrict: 'EA',
    scope: {
      callme: '&',  // <call-as-function-with-param  callme="ShowDataParam(msg)"></call-as-function-with-param>
      //  $scope.ShowDataParam = function (msg) {
    },
    template: '<input type="text" ng-model="sjpMsg" /> ' +
    '<div ng-click="callme({msg:sjpMsg})"> click me</div> '
  };


});


app.directive('callAsFunctionWithLink', function () {
  return {
    restrict: 'E',
    scope: {
      callme: '&'
      /* <call-as-function-with-link   onSubmit="submitHandler(firstName, lastName)">   </call-as-function-with-link>
       */
    },
    template: '<form><button ng-click="callme()">Submit</submit> </form>',
    link: function (scope) {
      scope.callme = function () {
        scope.callme({firstName: 'siddy', lastName: 'simpson'});
      };

    }
  };
});

app.directive("callAsFunctionWithLink2", function () {
  return {
    restrict: 'E',
    //templateUrl: '/Menu.html',
    //template : '<div  ng-click="Click($index)" />',
    template: '	<div class="menu">' +
    '<span>{{title}}</span>' +
    ' <ul>' +
    '<li ng-repeat="item in items" ng-class="{selected: $index==selectedIndex}" ng-click="Clicksjp($index)">' +
    '{{item.Text}}' +
    '</li>' +
    '</ul>' +
    '</div>',

    /*
     <call-as-function-with-link2   title="Menu" items="items" click="AlertTransition(index)" ></call-as-function-with-link2>
     * */
    scope: {
      title: '@',
      items: '=',
      clicksjp: '&'
    },

    link: function (scope) {
      scope.Click = function (index) {
        scope.selectedIndex = index;
        scope.clicksjp({index: index});
      };
    },

    /*  controller: function($scope, $log) {

     $scope.items = [
     { Text: 'Item 1', Value: 'Url1' },
     { Text: 'Item 2', Value: 'Url2' },
     { Text: 'Item 3', Value: 'Url3' }
     ];

     $scope.AlertTransition = function (index) {
     $log.info("in AlertTransition");
     console.log("Transitioning to " + $scope.items[index].Value);
     };

     },*/
  };
});
