"use strict";
exports.__esModule = true;
exports.BrowsingHistory = void 0;
var array_iterator_1 = require("./array_iterator");
var BrowsingHistory = /** @class */ (function () {
    function BrowsingHistory() {
        this.urls = [];
    }
    BrowsingHistory.prototype.add = function (url) {
        this.urls.push(url);
    };
    BrowsingHistory.prototype.pop = function () {
        this.urls.pop();
    };
    BrowsingHistory.prototype.createIterator = function () {
        return new array_iterator_1.ArrayIterator(this.urls);
    };
    return BrowsingHistory;
}());
exports.BrowsingHistory = BrowsingHistory;
