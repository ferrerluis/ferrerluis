var app = angular.module('app', ['ngRoute']);

app.controller("appController", ['$scope', '$location', function ($scope, $location) {

    $scope.shared = {};

    $scope.shared.year = new Date().getFullYear();

    $scope.shared.fullHeightAt = function(routes) {
        // $log.debug($location.path() === routes[0]);
        // $log.debug(routes[0]);

        if (routes.contains($location.path())) {
            return 'full-height';
        }
    };

    $scope.shared.isHome = function () {

        if ($location.path() == '/home') {

            return true;
        }

        return false;
    };

    $scope.shared.buttonActive = function(button) {

        var page = $location.path().replace("/", "");

        if (page === button) {

            return "active";
        }

        return "";
    };
}]);