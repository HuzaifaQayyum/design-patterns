"use strict";
exports.__esModule = true;
exports.ArrayIterator = void 0;
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.currentIteration = 0;
        this.array = array;
    }
    ArrayIterator.prototype.next = function () {
        this.currentIteration++;
    };
    ArrayIterator.prototype.hasNext = function () {
        return this.currentIteration < this.array.length;
    };
    ArrayIterator.prototype.current = function () {
        return this.array[this.currentIteration];
    };
    return ArrayIterator;
}());
exports.ArrayIterator = ArrayIterator;
