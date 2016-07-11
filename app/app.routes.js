app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/coding', {
                templateUrl: 'app/components/blog/blogView.html',
                controller: 'blogController',
                controllerAs: 'blog'
            })
            .when('/design', {
                templateUrl: 'app/components/blog/blogView.html',
                controller: 'blogController',
                controllerAs: 'blog'
            })
            .when('/blog', {
                templateUrl: 'app/components/blog/blogView.html',
                controller: 'blogController',
                controllerAs: 'blog'
            })
            .otherwise({
                redirectTo: '/home'
            });

        // $locationProvider.html5Mode(true);
    }])

// app.controller('homeController', function($scope, $log) {
//
//     $scope.message = 'This is the home screen';
//
//     $log.info("Got to home");
// });