"use strict";
exports.__esModule = true;
exports.Editor = exports.EditorState = void 0;
var EditorState = /** @class */ (function () {
    function EditorState(title, content) {
        this._title = title;
        this._content = content;
    }
    Object.defineProperty(EditorState.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorState.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    return EditorState;
}());
exports.EditorState = EditorState;
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Object.defineProperty(Editor.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Editor.prototype.createState = function () {
        return this._state;
    };
    Editor.prototype.restore = function (state) {
        this._state = state;
    };
    return Editor;
}());
exports.Editor = Editor;
