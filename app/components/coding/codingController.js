/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $log) {

    $scope.title = 'Coding';

    $scope.projects = [];
    
    $scope.noProjects = function () {
        
        return $scope.projects.length == 0;
    };
});