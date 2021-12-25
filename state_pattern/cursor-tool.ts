import { Tool } from "./tool";

export class CursorTool implements Tool { 
    mouseUp(): void {
        console.log("Cursor mouse up");
    }

    mouseDown(): void {
        console.log("Cursor mouse down");
    }
}