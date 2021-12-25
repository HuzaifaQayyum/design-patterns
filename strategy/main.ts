import { ImageStorage } from "./image-storage";
import { BlackWhiteFilter } from "./black-white.filter";
import { JPEGCompressor } from "./jpeg.compressor";


const storage = new ImageStorage();
storage.store("aaa", new JPEGCompressor(), new BlackWhiteFilter());