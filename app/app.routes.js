app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/coding', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
                controller: 'codingController',
                controllerAs: 'coding'
            })
            .when('/design', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
                controller: 'designController',
                controllerAs: 'design'
            })
            .when('/blog', {
                templateUrl: 'app/shared/projectTemplate/projectTemplateView.html',
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
