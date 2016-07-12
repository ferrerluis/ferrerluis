/**
 * Created by luis on 7/6/16.
 */
// var app = angular.module('app');

app.controller('blogController', function($scope, $log) {

    $scope.page = {};

    $scope.page.title = 'Blog';
    $scope.page.color = {'background-color': '#FCB935'};

    $scope.page.projects = [];

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };
});