'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'HomeController'
        })

        .when('/blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'BlogController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});

});

app.controller('HomeController', function($scope, $http) {
    $http.get('http://localhost/examples/spa/objects.json')
    .success(function(response){
        $scope.myData = response.data;
    });
    $scope.message = "Hello"
});

app.controller('BlogController', function($scope) {
    $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from AboutController';
});