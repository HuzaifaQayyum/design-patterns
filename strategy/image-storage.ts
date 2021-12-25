import { Compressor } from "./compressor";
import { Filter } from "./filter";

export class ImageStorage { 

    store(file_name: string, compressor: Compressor, filter: Filter): void { 
        compressor.compress();
        filter.filter();
    }

} 

