var app = angular.module('app', ['ngRoute']);

app.controller("appController", ['$scope', '$location', '$log', '$window', function ($scope, $location, $log, $window) {

    // $log.debug($location.path());

    // $log.debug($window.innerWidth);

    $scope.responsiveButton = function(buttonTitle) {

        if ($window.innerWidth < 650) {
            return buttonTitle.charAt(0);
        }

        return buttonTitle;
    };

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