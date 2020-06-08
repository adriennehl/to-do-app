import React, {Component} from "react";
import {DropdownButton, Dropdown} from "react-bootstrap";

class Filter extends  Component {
    constructor(props) {
        super(props);
        this.filterChange = this.filterChange.bind(this);
        this.state = {filter: null};
    }

    filterChange(e){
        console.log("EVENT", e);
        this.setState({filter: e});
    }



    render() {
        return(
            <span>
                <Dropdown
                    alignRight
                    onSelect={this.filterChange}
                >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <ul>
                        <   Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        </ul>
                        <ul>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        </ul>
                        <ul>
                        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>

                <h1>
                    {this.state.filter}
                </h1>
            </span>
        );
    }
}


export default Filter

