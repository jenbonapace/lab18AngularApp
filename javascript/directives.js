var app = angular.module("myMod");
app.directive("footDir", function(){
  return{
    restrict: "EA",
    replace:true,
    templateUrl:"htmlfiles/footer.html",
  };
});

app.directive("headDir", function(){
  return{
    restrict: "EA",
    replace:true,
    templateUrl:"htmlfiles/header.html",
  };
});
