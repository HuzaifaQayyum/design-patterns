"use strict";
exports.__esModule = true;
exports.ImageStorage = void 0;
var ImageStorage = /** @class */ (function () {
    function ImageStorage() {
    }
    ImageStorage.prototype.store = function (file_name, compressor, filter) {
        compressor.compress();
        filter.filter();
    };
    return ImageStorage;
}());
exports.ImageStorage = ImageStorage;
