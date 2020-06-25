import React, {Component} from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
import * as ROUTES from "../../Constants/routes";
import ToDoNote from "../ToDoNote";

const NoteButton = styled.button`
  background: powderblue;
  color: #286FB4;
  font-size: 1.1em;
  margin: 1em;
  padding: 0.8em 1em;
  border: 2px solid GREEN-BLUE;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #de5285;
    color: white;
  }
`;

class CreateNoteButton extends  Component {
    constructor(props) {
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
        this.state = {pressed: false};
    }

    nextPath(path){
        this.props.history.push(path)
    }

    buttonPressed(){
        console.log("EVENT", this.state);
        this.setState({pressed: !this.state.pressed});
        this.nextPath(ROUTES.NEW_NOTE);
    }

    render() {
        return(
            <NoteButton onClick={this.buttonPressed}> New Note </NoteButton>
        );
    }
}


export default withRouter(CreateNoteButton)

