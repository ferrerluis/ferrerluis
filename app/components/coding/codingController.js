/**
 * Created by luis on 7/6/16.
 */
// var app = angular.module('app');

app.controller('blogController', function($scope, $log) {

    $scope.title = 'Blog';

    $scope.projects = [];
    
    $scope.noProjects = function () {
        
        return $scope.projects.length == 0;
    };
});