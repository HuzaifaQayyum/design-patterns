export class EditorState { 
    private readonly _title: string;
    private readonly _content: string;
    
    constructor(title: string, content: string) { 
        this._title = title;
        this._content = content;
    }
    
    public get title(): string {
        return this._title;
    }

    public get content(): string {
        return this._content;
    }
}

export class Editor { 
    private _state: EditorState;

    set state(state: EditorState) {
        this._state = state;
    }

    get state() { 
        return this._state;
    }

    createState() {
        return this._state; 
    }

    restore(state: EditorState) { 
        this._state = state;
    }

}
