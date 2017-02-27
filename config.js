var app = angular.module("myMod");

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/fizzBuzz', {
    controller: 'fizzBuzzController',
    templateUrl: 'fizzBuzz.html'
  })
  .otherwise({
    redirectTo:'/',
  });
  // .when('')
  $locationProvider.hashPrefix('');
});
