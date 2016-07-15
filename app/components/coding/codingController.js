/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    $scope.page = new Page('coding');

    Project.all($http, function (response) {
        $scope.page.projects = response.exclude(function (value) {
            return value.url === "https://github.com/ferrerluis/blog";
        });
    });

});