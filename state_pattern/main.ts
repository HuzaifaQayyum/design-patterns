import { Canvas } from './canvas';
import { CursorTool } from './cursor-tool';
import { SelectionTool } from './selection-tool';

var canvas: Canvas = new Canvas(new SelectionTool());

canvas.mouseUp();

canvas.changeTool(new CursorTool());
canvas.mouseUp();