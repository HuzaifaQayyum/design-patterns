import { Tool } from "./tool";

export class SelectionTool implements Tool { 

    mouseUp(): void {
        console.log("SELECT MOUSE UP");
    }

    mouseDown(): void {
        console.log("SELECT MOUSE DOWN");
    }
}