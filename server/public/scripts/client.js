let app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
    console.log('config loaded');
    $routeProvider
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        .when('/home', {
            templateUrl: '/views/home.html',
        })
        .otherwise(
            { redirectTo: '/home' }
        );
    
});