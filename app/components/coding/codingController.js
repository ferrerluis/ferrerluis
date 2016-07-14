/**
 * Created by luis on 7/6/16.
 */

app.controller('codingController', function($scope, $http, $log) {

    var Project = function (title, description, url, language) {

        this.title = title.capitalize();
        this.description = description;
        this.url = url;
        this.language = language;
    };

    Project.all = function(callback) {
        var data;
        var projects = [];

        $http.get('https://api.github.com/users/ferrerluis/repos')
            .then(function successCallback(response) {
                data = response.data;

                for (key in data) {
                    var name = data[key]['name'];
                    var description = data[key]['description'];
                    var url = data[key]['html_url'];
                    var language = data[key]['language'];

                    projects.push(new Project(name, description, url, language));
                }

                callback(projects);

            }, function errorCallback(response) {
                callback([]);
            });

    };

    $scope.page = {};

    $scope.page.title = 'Coding';
    $scope.page.color = {'background-color': '#D85750'};

    $scope.page.projects = [];

    Project.all(function (response) {
        $scope.page.projects = response.slice(0, 5);
    });

    $scope.noProjects = function () {
        
        return $scope.page.projects.length === 0;
    };
});