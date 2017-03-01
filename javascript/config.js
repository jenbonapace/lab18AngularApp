var app = angular.module("myMod");

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/fizzBuzz', {
    controller: 'fizzBuzzController',
    templateUrl: 'htmlfiles/fizzBuzz.html'
  })
  .when('/quoteGenerator', {
    controller: 'apiController',
    templateUrl: 'htmlfiles/api.html'
  })
  .otherwise({
    redirectTo:'/',
  });
  // .when('')
  $locationProvider.hashPrefix('');
});
