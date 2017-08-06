/**
 * Created by luis on 7/6/16.
 */

app.controller('experienceController', function($scope, $log) {

    $scope.page = new Page('experience', {'itemName': 'position'});

    $scope.noProjects = function () {

        return $scope.page.projects.length == 0;
    };
});
