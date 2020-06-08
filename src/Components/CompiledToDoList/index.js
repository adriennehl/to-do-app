import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap'
import CompletionBox from './CompletionBox'
import Filter from "./Filter";
import CreateNoteButton from "./CreateNoteButton";
import NotesCompiled from "./NotesCompiled";
import Header from "./Header";
import PreviewFunctions from "./NotePreview/PreviewFunctions";
const CompiledToDoList = () => (
    <div>
        <h1>Compiled to do List</h1>
    </div>
);

const INIT_STATE = {
    search_bar:  '',
    title: '',
    due_date: '',
    completion: true
}

class CompiledToDoListBase extends  Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <span>
                <Header />
                <PreviewFunctions />
            </span>
        )
    }
}


export default CompiledToDoListBase;