import React, { Component } from 'react';
import PostData from "../Data/posts.json";
import styled from "styled-components";
import ToDoNote from "../../ToDoNote";
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import* as ROUTES from '../../../Constants/routes';
import {withRouter} from 'react-router-dom'



const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 50px;
  color: #444;
  border: 1px solid #1890ff;
  background: ${props => props.completed ? '#98ff98' : 'papayawhip'};
`;


const Wrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 10px;
    color: #7e118a;
    display: inline;
`;

const Title = styled.h3`
    color: #0d1a26;
    font-weight: 200;
    padding-left: 2%;
    self-align:center
    display: inline
`;

const Description = styled.h3`
    color: #FF0000;
    font-weight: 200;
    padding-left: 2%;
    self-align:center
    display: inline
`;

const Date = styled.h3`
    color: #FF0000;
    font-weight: 200;
    padding-left: 10%;
    self-align:right
`;

const Picture = styled.img`
      width: 150px;
      height: 150px;
      border: 1px solid #ddd;
      border-radius: 4px;
`;



class NoteDetail extends Component{
    constructor(props) {
        super(props);
        this.setNoteState = this.setNoteState.bind(this);
        this.reduceDescriptionLength = this.reduceDescriptionLength.bind(this);
        this.handleClick = this.handleClick.bind(this);



        this.state = {
            noteItem: null
        }
    }
    setNoteState () {
        const {note} = this.props
        this.setState({
            noteItem: note
        })
    }
    componentDidUpdate (prevProps, prevState, snapshop) {
        if (this.props !== prevProps) {
            this.setNoteState()
        }
    }

    componentDidMount () {
        this.setNoteState()
    }

    reduceDescriptionLength(description) {
        description = description.substring(0, Math.min(description.length, 50));
        return description + " ..."

    }
    handleClick(key){
        console.log("PRessed")
    }



    render() {
        const {noteItem} = this.props
        return(
                        <Wrapper {...noteItem}  as={Link} to={"note/"+noteItem.keys}>
                                <Picture src={noteItem.url}/>
                                <Wrapper2>
                                    <Title>{noteItem.title}</Title>
                                    <Description> {this.reduceDescriptionLength(noteItem.description)} </Description>
                                </Wrapper2>
                                <Date>Days Left: {noteItem.date}</Date>
                        </Wrapper>
        )
    }
}


export default (NoteDetail)
