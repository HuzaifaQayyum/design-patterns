import { Tool } from "./tool";

export class Canvas { 
    tool: Tool;

    constructor(tool: Tool) { 
        this.tool = tool;
    }

    changeTool(tool: Tool) { 
        this.tool = tool;
    }

    mouseUp() { 
        this.tool.mouseUp();
    }
}