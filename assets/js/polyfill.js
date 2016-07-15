/**
 * Created by luis on 7/14/16.
 */

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.capitalizeAll = function () {
    var result = "";

    for (var word in this.split(" ")) {

        result += word.capitalize();
    }

    return result;
};

String.prototype.endWithPeriod = function () {
    var last = this.charAt(this.length - 1);

    if (last.match(/\w/)) {
        return this + ".";
    }

    return this + "";
};

Array.prototype.empty = function () {
    return this.length === 0;
};

Array.prototype.exclude = function (callback) {
    return this.filter(function(value) {
        return !callback(value);
    });
};