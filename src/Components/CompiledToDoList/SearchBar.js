import React, {Component} from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {search: ''};
    }

    handleChange(e){
        //console.log("EVENT", e.target.value)
        e.preventDefault();
        this.setState({search: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.search)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MDBCol md="6">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            onChange = {this.handleChange}

                        />
                        <MDBBtn
                            gradient="aqua"
                            rounded size="sm"
                            type="submit"
                            className="mr-auto"
                        >

                            Search
                        </MDBBtn>

                </MDBCol>
            </form>
        );
    }
}

export default SearchBar;