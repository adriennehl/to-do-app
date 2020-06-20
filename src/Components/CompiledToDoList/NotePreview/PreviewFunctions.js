import React, { Component } from "react";
import Button from "react-bootstrap";
import styled from "styled-components";
import turnitup from "./turnitup.jpg"
import PostData from "../Data/posts.json";
import NoteDetail from "./NoteDetail";
import index from "./index";
import {connect} from "react-redux";
import {withFirebase} from "../../Firebase";
import {compose} from 'recompose'

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 10px;
  color: #00FFFF;
`;

function mapStateToProps(state, ownProps){
        console.log("STATE", state)
        return{
                noteList: state.noteState.noteList
        };
}


const mapDispatchToProps = (dispatch) => ({
        setNote: (noteList) => {
                console.log("SETTING POSTDATA", noteList);
                dispatch({type: 'NOTE_LIST', noteList});
        }
});

class PreviewFunctions extends Component {
        constructor (props, context) {
                super(props, context)
        }
        daysLeft(dueDate){
                var date = new Date().getDate();
                var month = new Date().getMonth();
                var year = new Date().getFullYear();
                var today = (new Date(year, month, date))
                return Math.max(0, parseInt((dueDate - today.getTime())/(1000*60*60*24)))
        }

        componentDidMount() {
                this.props.firebase.notes().once("value").then(snapshot => {
                        let out = snapshot.val()
                        if(out !== null) {
                                let keys = Object.keys(out)
                                jsonAdd = ""
                                for (var i = 0; i < keys.length; i++) {
                                        var k = keys[i]
                                        var title = out[k].title;
                                        var description = out[k].text;
                                        var date = out[k].dueDate;
                                        var daysLeft = this.daysLeft(date)
                                        var completed = out[k].isDone;
                                        var url = out[k].url;
                                        const json = `{"title": "${title}" , "date":${daysLeft}, "description":"${description}", "completed":${completed}, "url": "${url}", "keys": "${k}"}`;
                                        if (keys.length > 1 && i < keys.length - 1) {
                                                var jsonAdd = jsonAdd + json + ','
                                        } else {
                                                var jsonAdd = jsonAdd + json
                                        }
                                }
                                var finalJson = "[" + jsonAdd + "]"
                                console.log(finalJson)
                                var obj = JSON.parse(finalJson)
                                this.props.setNote(obj);
                        }
                })

        }


        render() {
                return (
                    <Wrapper3>
                            {this.props.noteList.map((item, index) => {
                                    console.log("ITEM", item);
                                    return (
                                        <NoteDetail noteItem={item} key={index}/>
                                    )
                            })}
                    </Wrapper3>
                )
        }
}

export default compose(withFirebase, connect(mapStateToProps, mapDispatchToProps))(PreviewFunctions);


