import { EditorState } from "./editor";


export class History { 
    private states: EditorState[] = [];
    private current = -1;

    public getCurrentState() { 
        return this.states[this.current]
    }

    push(state: EditorState) { 
        this.states.push(state);
        this.current = this.states.length - 1;
    }

    undo() { 
        if (this.current > -1)
            this.current--;
        return this.getCurrentState();
    }

    redo() {
        if (this.current < (this.states.length - 1)) 
            this.current++;
        return this.getCurrentState();
    }

}