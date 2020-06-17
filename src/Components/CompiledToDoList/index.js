import React, {Component} from 'react';
import Header from "./Header";
import PreviewFunctions from "./NotePreview/PreviewFunctions";
import {createStore} from "redux";
import rootReducer from "./Reducers/reducer";
import {Provider} from "react-redux";

const CompiledToDoList = () => (
    <div>
        <h1>Compiled to do List</h1>
    </div>
);

const store = createStore(rootReducer)

class CompiledToDoListBase extends  Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <span>
                <Provider store = {store}>
                <Header />
                <PreviewFunctions />
                </Provider>
            </span>
        )
    }
}


export default CompiledToDoListBase;