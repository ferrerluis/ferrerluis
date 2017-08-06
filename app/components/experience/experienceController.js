/**
 * Created by luis on 7/6/16.
 */

app.controller('designController', function($scope, $log) {

    $scope.page = new Page('design', {'itemName': 'design'});

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };
});