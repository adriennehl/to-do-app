import React, {useState, useEffect} from 'react';
import NotesTitle from './NotesTitle';
import TextBox from './TextBox';
import CompleteBox from './CompleteBox';
import ImageBox from './ImageBox';
import DateBox from './DateBox.js';
import { Link } from 'react-router-dom';
import* as ROUTES from '../../Constants/routes';

import Button from 'react-bootstrap/Button';
import {NotificationManager} from 'react-notifications';

import * as firebase from "firebase/app";
import "firebase/database";

function ToDoNote (props){
    const [title, setTitle] = useState('Click to edit title')

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear()
    const [createdDate, setCreated] = useState(new Date(year, month, date))
    const [dueDate, setDue] = useState(new Date(year, month, date))

    const [text, setText] = useState('')

    const [url, setUrl] = useState('')
    const [isDone, setDone] = useState(false)

    var database = firebase.database();
    const [key, setKey] = useState(props.noteKey ? props.noteKey:'')

    useEffect(() => {
        if (props.noteKey){
            database.ref('notes/'+props.noteKey).on('value', gotData);
        }
    }, [database, props.noteKey]);

    // handler to delete the current note
    const deleteNote= () =>{
        if (key)
            database.ref('notes/' + key).remove()
    };

    const gotData = data => {
        var element = data.val()
        setTitle(element.title);
        setCreated(new Date(element.createdDate));
        setDue(new Date (element.dueDate));
        setText(element.text);
        setUrl(element.url);
        setDone(element.isDone);
    };

    const handleSave= ()=>{
        var note = {
            title: title,
            createdDate: createdDate.valueOf(),
            dueDate: dueDate.valueOf(),
            text: text,
            url: url,
            isDone: isDone
        };
        if(!key){
            setKey(database.ref('notes/').push(note).key)
        }
        else{
            database.ref('notes/'+key).set(note)
        }
        NotificationManager.success('You have saved changes', 'Saved!', 2000);
    }

    const daysLeft = () =>{
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var today = (new Date(year, month, date))
        return Math.max(0, (dueDate.getTime()- today.getTime())/(1000*60*60*24))
    }

    return(
        <div className = 'flex-container-col' id='noteCard'
             style={{backgroundColor : (isDone ?'palegreen':'lightcoral'),'textAlign':'center'}}>
            <div className = 'flex-container-row'>
                <Link to={ROUTES.COMPILED_TO_DO_LIST}>Back</Link>
                <NotesTitle title = {title} setTitle={setTitle} />
                <Link to={ROUTES.COMPILED_TO_DO_LIST} onClick = {deleteNote}>delete</Link>
            </div>
            <ImageBox url = {url} setUrl = {setUrl}/>
            <div className = 'flex-container-row'>
                Date Created:<DateBox element = 'created' createdDate = {createdDate} setCreated={setCreated}/>
                Due Date:<DateBox element = 'due' dueDate = {dueDate} setDue={setDue}/>
            </div>
            <TextBox text = {text} setText={setText} className = 'flex-container-col'/>
            <div className = 'flex-container-row'>
                <Button variant = 'success'
                        onClick={handleSave} style={{marginTop:'10px'}}>Save</Button>
                <div className = 'flex-container-col'>
                    <p style={{marginTop:'20px'}}>Days Left:</p>
                    <h2>{daysLeft()}</h2>
                </div>
                <CompleteBox isDone = {isDone} setDone = {setDone} />
            </div>
        </div>
    )
}

export default ToDoNote;