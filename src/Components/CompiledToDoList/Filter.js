import React, {Component} from "react";
import {DropdownButton, Dropdown} from "react-bootstrap";
import PostData from "./Data/posts.json"
import PreviewFunctions from "./NotePreview/PreviewFunctions";
import { connect } from 'react-redux'




class Filter extends  Component {
    constructor(props) {
        super(props);
        this.listSortDate = this.listSortDate.bind(this)
        this.listSortComplete = this.listSortComplete.bind(this)
        this.listSortTitle = this.listSortTitle.bind(this)
        this.filterChange = this.filterChange.bind(this)
        this.state = {
            currList: []
        }

    }

    componentDidMount () {
        this.setState({
            currList: PostData
        })
    }

    filterChange(e){
        this.setState({filter: e});
        if(e == "1"){
            this.listSortComplete()
        }
        else if(e == "2"){
            this.listSortDate()
        }
        else if(e == "3"){
            this.listSortTitle()
        }
    }

    listSortComplete(event){
        let noteList  = [... this.props.noteList].sort(a => a ? -1 : 1)
        this.props.setNote({
            noteList
        })
    }

    listSortDate(event){
        let noteList  = [... this.props.noteList].sort((a,b) => (a.date) - (b.date))
        this.props.setNote({
            noteList
        })
    }
    listSortTitle(event){
        let noteList  = [... this.props.noteList].sort((a, b) => a.title.toLowerCase() !== b.title.toLowerCase() ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 : 0)
        this.props.setNote({
            noteList
        })
    }




    render() {
        return(
            <span>
                <Dropdown
                    alignRight
                    onSelect={this.filterChange}
                >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <ul>
                            <Dropdown.Item eventKey="1">Filter by Complete</Dropdown.Item>
                        </ul>
                        <ul>
                            <Dropdown.Item eventKey="2">Filter by Days Left</Dropdown.Item>
                        </ul>
                        <ul>
                            <Dropdown.Item eventKey="3">Filter by Title </Dropdown.Item>
                        </ul>

                    </Dropdown.Menu>
                </Dropdown>
            </span>
        );
    }
}

function mapStateToProps(state){
    console.log("STATE", state)
    return{
        noteList: state.noteState.noteList
    }
}

const mapDispatchToProps = (dispatch) => ({
    setNote: (noteList) => {
        console.log(noteList.noteList)
        dispatch({type: 'NOTE_LIST', noteList: noteList.noteList});
    }
});



export default connect(
        mapStateToProps,
        mapDispatchToProps
    )
(Filter);


