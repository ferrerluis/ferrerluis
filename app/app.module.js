var app = angular.module('app', ['ngRoute']);

app.controller("appController", ['$scope', '$location', '$log', '$window', function ($scope, $location) {


    $scope.inHome = function () {

        if ($location.path() == '/home') {

            return true;
        }

        return false;
    };

    $scope.buttonActive = function(button) {

        var page = $location.path().replace("/", "");

        if (page === button) {

            return "active";
        }

        return "";
    };
}]);