import React, {Component} from "react";
import {InputGroup} from "react-bootstrap";

class CompletionBox extends  Component {
    constructor(props) {
        super(props);
        this.valueChange = this.valueChange.bind(this);
        this.state = {completed: false};
    }

    valueChange(e){
        this.setState({completed: e.target.checked});
    }



    render() {
        return(
            <div>
                <span>
                    <InputGroup className = "mb-3">
                        <InputGroup.Checkbox
                            onChange={this.valueChange}
                        />
                    </InputGroup>
                    <h1>
                        {this.state.completed.toString()}
                    </h1>
                </span>
            </div>
        )
    }
}


export default CompletionBox;