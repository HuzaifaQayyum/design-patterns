"use strict";
exports.__esModule = true;
var image_storage_1 = require("./image-storage");
var black_white_filter_1 = require("./black-white.filter");
var jpeg_compressor_1 = require("./jpeg.compressor");
var storage = new image_storage_1.ImageStorage();
storage.store("aaa", new jpeg_compressor_1.JPEGCompressor(), new black_white_filter_1.BlackWhiteFilter());
