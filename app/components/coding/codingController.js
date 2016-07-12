/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $log) {

    $scope.page = {};
    
    $scope.page.title = 'Coding';
    $scope.page.color = {'background-color': '#D85750'};

    $scope.page.projects = [];

    $scope.noProjects = function () {
        
        return $scope.page.projects.length == 0;
    };
});