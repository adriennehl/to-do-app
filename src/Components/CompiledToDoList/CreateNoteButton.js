import React, {Component} from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";

const FilterButton = styled.button`
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

    buttonPressed(){
        console.log("EVENT", this.state);
        this.setState({pressed: !this.state.pressed});
    }

    render() {
        return(
                <FilterButton onClick={this.buttonPressed} />
        );
    }
}


export default CreateNoteButton

