/**
 * Created by luis on 7/14/16.
 */

var Page = function (title, options) {

    options = options || {};
    options['color'] = options.color || title;
    options['url'] = options.url || ""

    this.options = options

    this.title = title.capitalize();
    this.bgColor = "color-" + options.color + "-bg";
    this.color = "color-" + options.color;
    this.url = options.url;
    this.projects = [];
    this.posts = this.projects;
}

var Url = function (url, icon) {
    
    this.url = url;
    this.icon = 'fa fa-' + icon;
}

var Project = function (title, description, language, urls) {

    this.title = title.replace(/[-_]/g, " ").capitalize();
    this.description = description.endWith(".");
    this.language = language;
    this.urls = urls || [];

    this.addUrl = function (url) {
        if (url.url !== "" && url.url !== null) {
            this.urls.push(url);
        }
    }
};

Project.all = function(http, page, callback) {
    var projects = [];

    http.get(page.url)
        .then(function successCallback(response) {
            var data = response.data;

            var i = 0;
            for (i; i < data.length; i++) {
                var current = data[i];

                var name = current['name'];
                var description = current['description'];
                var language = current['language'];
                var github = new Url(current['html_url'], 'github');
                var home = new Url(current['homepage'], 'globe');

                var project = new Project(name, description, language, [github]);
                project.addUrl(home);

                projects.push(project);
            }

            callback(projects);

        }, function errorCallback(response) {
            callback([]);
        });
};

var Post = function (title, excerpt, url) {

    this.title = title.replace("-", " ").capitalize();
    this.excerpt = excerpt.endWith("...");
    this.url = url;
};

Post.all = function (http, page, callback) {

    var posts = [];

    http.get(page.url)
        .then(function successCallback(response) {
            callback(posts);
        }, function errorCallback(response) {
            callback([]);
        });
}