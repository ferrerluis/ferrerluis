angular.module('app', ['ngRoute'])

    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'components/home/homeView.html',
                    controller: 'homeController',
                    controllerAs: 'home'
                })
                .when('/blog', {
                    templateUrl: 'components/blog/blog.html',
                    controller: 'blogController',
                    controllerAs: 'blog'
                });

            $locationProvider.html5Mode(true);
        }])