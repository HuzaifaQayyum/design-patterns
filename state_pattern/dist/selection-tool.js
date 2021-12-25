"use strict";
exports.__esModule = true;
exports.SelectionTool = void 0;
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
    }
    SelectionTool.prototype.mouseUp = function () {
        console.log("SELECT MOUSE UP");
    };
    SelectionTool.prototype.mouseDown = function () {
        console.log("SELECT MOUSE DOWN");
    };
    return SelectionTool;
}());
exports.SelectionTool = SelectionTool;
