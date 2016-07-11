var app = angular.module('app', ['ngRoute']);

app.controller("appController", ['$scope', '$location', '$log', function ($scope, $location, $log) {

    $log.debug($location.path());

    $scope.inHome = function () {

        if ($location.path() == '/home') {

            return true;
        }

        return false;
    }
}]);