/**
 * Created by luis on 7/6/16.
 */

app.controller('experienceController', function($scope, $http, $log) {

    $scope.page = new Page('experience', {
    	itemName: 'position',
    	url: 'assets/data/positions.json'
    });

    Position.all($http, $scope.page, function (positions) {
        $scope.page.items = positions;
    });
});
