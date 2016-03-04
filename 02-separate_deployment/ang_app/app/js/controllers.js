app.controller("MainController", function($scope, $http, CatService){
  $scope.cats = "the cat gang...";

  console.log("we are starting the requests ...");
  CatService.getCats().then(function(payload){
    console.log("we are getting all Cats");
    $scope.cat_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });

});

app.controller("CatController", function($scope, $http, CatService, $routeParams){
  // $scope.cats = "the cat gang...";
  the_id = $routeParams.id;
  CatService.getCat(the_id).then(function(single){
    console.log("we are getting ONE Cat:");
    $scope.singleCat = single.data;
  });

});

app.controller("CatNewController", function($scope, $http, CatService, $routeParams){
  $scope.cat = {};
  $scope.addCat = function () {
    var newCat = $scope.cat;
    console.log(newCat);
    CatService.addCat(newCat).then(function (stuff) {
      console.log('we have received stuff ', stuff);
    });
  }

});
