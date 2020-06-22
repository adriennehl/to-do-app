import React, {Component} from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
import * as ROUTES from "../../Constants/routes";
import ToDoNote from "../ToDoNote";

const NoteButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #00FF00;
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

