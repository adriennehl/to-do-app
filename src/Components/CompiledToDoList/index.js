import React, {Component} from 'react';
import Header from "./Header";
import PreviewFunctions from "./NotePreview/PreviewFunctions";
import {createStore} from "redux";
import rootReducer from "../../Reducers/reducer";
import {Provider} from "react-redux";
import styled from "styled-components";



const CompiledToDoList = () => (
    <div>
        <h1>Compiled to do List</h1>
    </div>
);


class CompiledToDoListBase extends  Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header />
                <PreviewFunctions />
            </div>
        )
    }
}


export default CompiledToDoListBase;