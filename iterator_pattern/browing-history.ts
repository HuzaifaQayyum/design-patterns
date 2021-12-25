import { ArrayIterator } from "./array_iterator";

export class BrowsingHistory { 
    private urls: string[] = [];

    add(url: string) { 
        this.urls.push(url);
    }

    pop() { 
        this.urls.pop();
    }

    createIterator() { 
        return new ArrayIterator<string>(this.urls);
    }
}