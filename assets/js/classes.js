/**
 * Created by luis on 7/14/16.
 */

var Project = function (title, description, url, language) {

    this.title = title.replace("-", " ").capitalize();
    this.description = description.endWithPeriod();
    this.url = url;
    this.language = language;
};

Project.all = function(http, callback) {
    var data;
    var projects = [];

    http.get('https://api.github.com/users/ferrerluis/repos')
        .then(function successCallback(response) {
            data = response.data;

            var i = 0;
            for (i; i < data.length; i++) {
                var current = data[i];

                var name = current['name'];
                var description = current['description'];
                var url = current['html_url'];
                var language = current['language'];

                projects.push(new Project(name, description, url, language));
            }

            callback(projects);

        }, function errorCallback(response) {
            callback([]);
        });
};

var Page = function (title, color) {

    this.title = title.capitalize();
    this.color = "color-" + (color || title);
    this.projects = [];
}