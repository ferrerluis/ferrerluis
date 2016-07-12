/**
 * Created by luis on 7/6/16.
 */

app.controller('designController', function($scope, $log) {

    $scope.page = {};

    $scope.page.title = 'Design';
    $scope.page.color = {'background-color': '#67ABDE'};

    $scope.page.projects = [];

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };
});