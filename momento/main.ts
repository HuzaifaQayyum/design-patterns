import { Editor, EditorState } from "./editor";
import { History } from "./history";

const editor = new Editor();
const history = new History();

editor.state = new EditorState("A", "AA");
history.push(editor.createState());

editor.state = new EditorState("B", "BB");
history.push(editor.createState());

editor.restore(history.undo());
console.log(editor.state);