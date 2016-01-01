var myMod = angular.module('04ASER',[]);
myMod.factory('notify', ['$window', function(win) {
  var msgs = [];
  return function(msg) {
    msgs.push(msg);
    if (msgs.length == 3) {
      win.alert(msgs.join("\n"));
      msgs = [];
    }
  };
}]);


myMod.factory('simpleService', [function() {
  var x = 10;

  getX = function() {
    return x;
  };

  return getX;

}]);


myMod.factory('testService', ['$parse',function($parse) {
    return {
      x:20,
      getData : function() {
        return 'some data';
      },

      getX : function () {
        return this.x;
      },

      add: function(val1, val2) {
        //return angular.element.toNum(val1);// + number(val2);
        return Number(val1) + Number(val2);
      },

      met1: function () {
      //
      //  console.log($parse(20).toString());

        emp = {
          name: "sid",
          add: "london"
        };

        fn = $parse(emp);
        //fn.assign("jack");
        console.log(fn);

        //return $parse(2 + 4);
        return 6;
      }
    }
  }]);

/*

myMod.service('parseService',['$parse', function ($parse) {

    context = {
    author: {name: 'Umur'},
    title: '$parse Service',
    doSomething: function (something) {
      alert(something);
    }
  },
  this.parsedAuthorNameFn = $parse('author.name');
  this.parsedTitleFn = $parse('title');
  this.parsedDoSomethingFn = $parse('doSomething(author.name)');

  this.authorName = this.parsedAuthorNameFn(this.context);
  console.log("===========authername============");
  console.log(this.authorName);

  // = 'Umur'
  this.parsedTitle = this.parsedTitleFn(this.context);
  console.log("==========parsedTitle=============");
  console.log(this.parsedTitle);
  // = '$parse Service'


  this.parsedDoSomething = this.parsedDoSomethingFn(this.context);
  console.log("==========parsedDoSomething================");
  console.log(this.parsedDoSomething);
  // shows you an alert 'Umur'


  var name = "abc";



}]);
*/
