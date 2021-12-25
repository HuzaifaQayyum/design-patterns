"use strict";
exports.__esModule = true;
var canvas_1 = require("./canvas");
var cursor_tool_1 = require("./cursor-tool");
var selection_tool_1 = require("./selection-tool");
var canvas = new canvas_1.Canvas(new selection_tool_1.SelectionTool());
canvas.mouseUp();
canvas.changeTool(new cursor_tool_1.CursorTool());
canvas.mouseUp();
