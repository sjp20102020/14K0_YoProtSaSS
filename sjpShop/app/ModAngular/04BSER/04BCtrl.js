//https://umur.io/advanced-angular-parse/
    angular.module('sjpShopApp')
      .controller('04BCtrl', ['$scope','$parse', function($scope, $parse) {

        var context = {
          author: { name: 'Umur'},
          address: "london",
          title: '$parse Service',
          doSomething: function (something) {
            alert(something);
          }
        };
        var parsedAuthorNameFn = $parse('author.name');
        var parsedTitleFn = $parse('title');
        var parsedDoSomethingFn = $parse('doSomething(author.name)');

        console.log("===================parse=================");

        var authorName = parsedAuthorNameFn(context);
        console.log(authorName);
        // = 'Umur'

        var parsedTitle = parsedTitleFn(context);
        // = '$parse Service'
        console.log(parsedTitle);

        var parsedDoSomething = parsedDoSomethingFn(context);
        // shows you an alert 'Umur'#
        console.log(parsedDoSomething);

        console.log($parse('address')(context));
        }]);
