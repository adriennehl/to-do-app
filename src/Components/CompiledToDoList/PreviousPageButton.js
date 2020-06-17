import React, {Component} from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'

const BackButton = styled.button`  
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


class PreviousPageButton extends  Component {
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
        this.nextPath('/');
    }

    render() {
        return(
            <BackButton onClick={this.buttonPressed}> Previous </BackButton>
        );
    }
}


export default withRouter(PreviousPageButton)

