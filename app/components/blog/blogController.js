/**
 * Created by luis on 7/6/16.
 */
// var app = angular.module('app');

app.controller('blogController', function($scope, $log, $http) {

    // var Post = function () {
    //     this.firstName = firstName;
    //     console.log('Person instantiated');
    // };

    $scope.page = new Page('blog', {
        url: "https://api.github.com/repos/ferrerluis/blog/contents",
        itemName: 'post'
    });

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };

    Post.all($http, $scope.page, function (posts) {
        $scope.page.posts = posts;
    });
});