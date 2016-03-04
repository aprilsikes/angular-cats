var app = angular.module("myApp", ['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/cats', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/cats/new', {
        templateUrl: 'partials/new.html',
        controller: 'CatNewController'
      })
      .when('/cats/:id', {
        templateUrl: 'partials/cat.html',
        controller: 'CatController'
      })
    $locationProvider.html5Mode(true);
});
