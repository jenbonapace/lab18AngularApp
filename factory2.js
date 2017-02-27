var app = angular.module("myMod");

app.factory('apiFactory', function($http){

  return{
    grabData: function(){
      return $http({
        url:"https://ronreiter-meme-generator.p.mashape.com/meme",
        method:'GET'  
      })
      .then(function success(response){
        return response;
      },  function(error) {
        console.log(error);
      });
    }
  }

});
