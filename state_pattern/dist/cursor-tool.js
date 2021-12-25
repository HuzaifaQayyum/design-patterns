"use strict";
exports.__esModule = true;
exports.CursorTool = void 0;
var CursorTool = /** @class */ (function () {
    function CursorTool() {
    }
    CursorTool.prototype.mouseUp = function () {
        console.log("Cursor mouse up");
    };
    CursorTool.prototype.mouseDown = function () {
        console.log("Cursor mouse down");
    };
    return CursorTool;
}());
exports.CursorTool = CursorTool;
