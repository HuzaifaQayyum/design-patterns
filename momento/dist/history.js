"use strict";
exports.__esModule = true;
exports.History = void 0;
var History = /** @class */ (function () {
    function History() {
        this.states = [];
        this.current = -1;
    }
    History.prototype.getCurrentState = function () {
        return this.states[this.current];
    };
    History.prototype.push = function (state) {
        this.states.push(state);
        this.current = this.states.length - 1;
    };
    History.prototype.undo = function () {
        if (this.current > -1)
            this.current--;
        return this.getCurrentState();
    };
    History.prototype.redo = function () {
        if (this.current < (this.states.length - 1))
            this.current++;
        return this.getCurrentState();
    };
    return History;
}());
exports.History = History;
