'use strict';

// create the module and name it scotchApp
var app = angular.module('myApp', []);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : '../pages/main.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : '../pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : '../pages/contact.html',
            controller  : 'contactController'
        })


});

app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
});