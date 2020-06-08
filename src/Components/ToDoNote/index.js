import React from 'react';
import NotesTitle from './NotesTitle';
import TextBox from './TextBox';
import CompleteBox from './CompleteBox';
import Image from './Image'
import { Link } from 'react-router-dom';
import* as ROUTES from '../../Constants/routes';
import Date from './Date.js'
import * as firebase from "firebase/app";
import "firebase/database";

function ToDoNote (props){
    var database = firebase.database();
    var key = Math.floor(Math.random()*10000)

    // handler to delete the current note
    const deleteNote= () =>{
        database.ref('notes/' + key).remove()
    };
    
    // check if props is accessing an existing note and get values if so
    if (props.Id){
        key = props.Id
    }
    // otherwise create a new note in database and set to default values
    else{
            database.ref('notes/' + key).set({
            title: 'Click to edit note Title',
            date_created: 'Click to set date' ,
            date_due: 'Click to set date',
            isDone: false,
            img: '', 
        });
    }

    return(
        <div className = 'flex-container-col' id='noteCard' style={{backgroundColor : 'lightcoral','textAlign':'center'}}>
            <div className = 'flex-container-row'>
                <Link to={ROUTES.COMPILED_TO_DO_LIST}>Back</Link>
                <NotesTitle Id = {key}/>
                <Link to={ROUTES.COMPILED_TO_DO_LIST} onClick = {deleteNote}>delete</Link>
            </div>
            <Image Id = {key}/>
            <div className = 'flex-container-row'>
                Date Created:<Date Id = {key} element = {'date_created'}/> 
                Due Date:<Date Id = {key} element = {'date_due'}/>
            </div> 
            <TextBox Id = {key} />
            <div className = 'flex-container-right'>
                <CompleteBox Id = {key}/> 
            </div>
        </div>
    )
}

export default ToDoNote;