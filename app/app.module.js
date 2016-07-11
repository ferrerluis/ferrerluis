var app = angular.module('app', ['ngRoute']);

app.controller("appController", ['$scope', '$location', '$log', function ($scope, $location, $log) {

    $log.debug($location.path());

    $scope.inHome = function () {

        if ($location.path() == '/home') {

            return true;
        }

        return false;
    };

    $scope.buttonActive = function(button) {

        var page = $location.path().replace("/", "");
        var patt = new RegExp(page);

        return patt.test(button);
    };
}]);