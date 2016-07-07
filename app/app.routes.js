 app.config(['$routeProvider', '$locationProvider',
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
            })
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);
    }])