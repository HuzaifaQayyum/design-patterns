import { Compressor } from "./compressor";

export class JPEGCompressor implements Compressor { 
    compress() { 
        console.log("Compressing...")
    }
}
