/**
 * Created by luis on 7/6/16.
 */
// var app = angular.module('app');

app.controller('blogController', function($scope, $log, $http) {

    // var Post = function () {
    //     this.firstName = firstName;
    //     console.log('Person instantiated');
    // };

    $scope.page = new Page('blog');

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };

    $http.get('https://api.github.com/users/ferrerluis')
        .then(function successCallback(response) {

        });
});