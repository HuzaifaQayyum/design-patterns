"use strict";
exports.__esModule = true;
exports.Canvas = void 0;
var Canvas = /** @class */ (function () {
    function Canvas(tool) {
        this.tool = tool;
    }
    Canvas.prototype.changeTool = function (tool) {
        this.tool = tool;
    };
    Canvas.prototype.mouseUp = function () {
        this.tool.mouseUp();
    };
    return Canvas;
}());
exports.Canvas = Canvas;
