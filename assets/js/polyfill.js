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

Array.prototype.empty = function () {
    return this.length === 0;
};