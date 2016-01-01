//https://thinkster.io/a-better-way-to-learn-angularjs/promises
//http://stackoverflow.com/questions/15604196/angularjs-where-to-use-promises


//facvtory vs services
//http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
//https://www.airpair.com/javascript/posts/services-in-angularjs-simplified-with-examples


angular.module('sjpQModule', [])
  .controller('502ACtrl', function ($scope, HelloWorld, service2, service3) {

    //$scope.messages = HelloWorld.getMessages();
    // console.log(service2.getMessages());
    //$scope.messages = service2.getMessages();
    //$scope.messages = ["abc", "xyz"];
  var promise0= service2.getMessages();
    promise0.then(function(val){
      $scope.messages = val;
    });



    var promise = service3.asyncGreet('Robin Hood');
    promise.then(function (greeting) {
      console.log('Success: ' + greeting);
    }, function (reason) {
      console.log('Failed: ' + reason);
    }, function (update) {
      console.log('Got notification: ' + update);
    });


  })

  .factory('service3', ['$timeout', '$q', function ($timeout, $q) {
    var returnValue = {};

    returnValue.asyncGreet = function(name)
    {
      var deferred = $q.defer();

      setTimeout(function () {
        deferred.notify('About to greet ' + name + '.');

        if (okToGreet(name)) {
          deferred.resolve('Hello, ' + name + '!');
        } else {
          deferred.reject('Greeting ' + name + ' is not allowed.');
        }
      }, 1000);
      return deferred.promise;
    };

    okToGreet = function (name) {
      return true;
    };

    return returnValue;
  }])

.factory('HelloWorld', function ($q, $timeout) {
    console.log("============in hello========");
    var getMessages2 = function () {
      var deferred = $q.defer();

      $timeout(function () {
        deferred.resolve(['Hello', 'world']);

      }, 2000);

      return deferred.promise;
    };

    return {
      getMessages2: getMessages2
    };

  })
  .factory('service2', ['$timeout', '$q', function ($timeout, $q) {
    var getMessages = function () {


      var defer = $q.defer()

      // simulated async function
      $timeout(function () {
        defer.resolve(["mon", "fri"]);
      }, 2000);

      return defer.promise;

      //return ["hii","byyy"];
    }

    return {
      getMessages: getMessages


    };

  }]);

