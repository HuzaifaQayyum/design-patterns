"use strict";
exports.__esModule = true;
var browing_history_1 = require("./browing-history");
var browingHistory = new browing_history_1.BrowsingHistory();
browingHistory.add("a");
browingHistory.add("b");
var iterator = browingHistory.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}
