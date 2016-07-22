/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding');

    Project.all($http, function (projects) {
        $scope.page.projects = projects.exclude(function (value) {
            return value.url === "https://github.com/ferrerluis/blog";
        });
    });

});