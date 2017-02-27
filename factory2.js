var app = angular.module("myMod");

app.factory('apiFactory', function($http){
  var __name of object__ ={};

  return{
    grabData: function(){
     $http({
        url:"https://yoda.p.mashape.com/yoda",)}
        method:'GET'
        headers:{
          "X-Mashape-Key":"cO8KAT9sA1mshhfncngbC5GjFi5qp1cYs7jjsn8f7O1ti8UH6H",
           "Accept": "text/plain"
         }
       },
      .then(function success(response){
        return response;
      },  function(error) {
        console.log(error);
      });
//here i have no clue what we are doing?
});
