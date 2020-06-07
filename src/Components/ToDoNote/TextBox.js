import React, { Component } from 'react'
import * as firebase from "firebase/app";
import "firebase/database";

class TextBox extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {username: ''};
    }

    handleChange(e){
        this.setState({username: e.target.value})
    }

    render() {
        return (
            <span>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <h1>
                    { this.state.username }
                </h1>
            </span>

        );
    }
}

export default TextBox;