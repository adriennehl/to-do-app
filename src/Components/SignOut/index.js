import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import * as ROUTES from "../../Constants/routes";
import { withFirebase } from '../Firebase';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex
    justify-content: flex-end
`


const NoteButton = styled.button`
  background: powderblue;
  color: #286FB4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid GREEN-BLUE;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #de5285;
    color: white;
  }
`;

class SignOut extends  Component {
    constructor(props) {
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    doSignOut(){
        this.props.firebase.doSignOut();
    }

    buttonPressed(){
        this.props.history.push(ROUTES.LANDING);
        this.doSignOut();
    }

    render() {
        return(
            <Wrapper>
                <NoteButton onClick={this.buttonPressed}> Sign Out </NoteButton>
            </Wrapper>
        );
    }
}


export default withRouter(withFirebase(SignOut))



