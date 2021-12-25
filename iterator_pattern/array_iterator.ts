import { Iterator } from "./iterator";

export class ArrayIterator<T> implements Iterator<T> {
    array: T[];
    private currentIteration: number = 0;
        
    constructor(array: T[]) { 
        this.array = array;
    }

    next(): void {
        this.currentIteration++;
    }

    hasNext(): boolean {
        return this.currentIteration < this.array.length;
    }

    current(): T {
        return this.array[this.currentIteration];
    }
}