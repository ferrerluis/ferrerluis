/**
 * Created by luis on 7/6/16.
 */

app.controller('designController', function($scope, $log) {

    $scope.title = 'Design';

    $scope.projects = [];
    
    $scope.noProjects = function () {
        
        return $scope.projects.length == 0;
    };
});