"use strict";
exports.__esModule = true;
var editor_1 = require("./editor");
var history_1 = require("./history");
var editor = new editor_1.Editor();
var history = new history_1.History();
editor.state = new editor_1.EditorState("A", "AA");
history.push(editor.createState());
editor.state = new editor_1.EditorState("B", "BB");
history.push(editor.createState());
editor.restore(history.undo());
console.log(editor.state);