/**
 * Created by luis on 7/14/16.
 */

var Project = function (title, description, url, language) {

    this.title = title.replace("-", " ").capitalize();
    this.description = description;
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
                var name = data[i]['name'];
                var description = data[i]['description'];
                var url = data[i]['html_url'];
                var language = data[i]['language'];

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