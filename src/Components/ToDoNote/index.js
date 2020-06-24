import React, {useState, useEffect} from 'react';
import NotesTitle from './NotesTitle';
import TextBox from './TextBox';
import CompleteBox from './CompleteBox';
import ImageBox from './ImageBox';
import DateBox from './DateBox.js';
import LandscapeLottie from './LandscapeLottie.jsx';

import { Link, useParams, useHistory } from 'react-router-dom';
import* as ROUTES from '../../Constants/routes';

import Button from 'react-bootstrap/Button';
import {NotificationManager} from 'react-notifications';

import * as firebase from "firebase/app";
import "firebase/database";
import {useSelector} from "react-redux";

function ToDoNote (props){
    const [{key}, setKey] = useState(useParams())
    const [title, setTitle] = useState('Click to edit title')
    const currUid = useSelector(state => state.sessionState.authUser.uid);
    console.log(currUid);


    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear()
    const [createdDate, setCreated] = useState(new Date(year, month, date))
    const [dueDate, setDue] = useState(new Date(year, month, date))

    const [text, setText] = useState('')

    const [url, setUrl] = useState('')
    const [isDone, setDone] = useState(false)

    var database = firebase.database();
    let history = useHistory()

    useEffect(() => {
        database.ref('users/' + currUid +"/notes/" + key).once("value",snapshot => {
            if (snapshot.exists()){
                setTitle(snapshot.child('title').val());
                setCreated(new Date(snapshot.child('createdDate').val()));
                setDue(new Date (snapshot.child('dueDate').val()));
                setText(snapshot.child('text').val());
                setUrl(snapshot.child('url').val());
                setDone(snapshot.child('isDone').val());
            }
        });
    }, []);

    // handler to delete the current note
    const deleteNote= () =>{
        if (key)
            database.ref('users/' + currUid + '/notes/' + key).remove()
            NotificationManager.error('Current Note has been deleted', 'Deleted!', 2000);
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
            var newKey = database.ref('users/' + currUid + '/notes/').push(note).key
            setKey(newKey)
            history.push('note/'+newKey)
        }
        else{
            database.ref('users/' + currUid + '/notes/'+key).set(note)
        }
        NotificationManager.success('You have saved changes', 'Saved!', 2000);
    }

    const daysLeft = () =>{
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var today = (new Date(year, month, date))
        return Math.max(0, (Math.floor(dueDate.getTime()- today.getTime())/(1000*60*60*24)))
    }

    return(
        <div className = 'flex-container-col' id='noteCard'
        style={{backgroundColor : (isDone ?'palegreen':'lightcoral'),'textAlign':'center'}}>
            <div className = 'flex-container-row'>
                <Button as ={Link} to={ROUTES.COMPILED_TO_DO_LIST} variant = 'info'>Back</Button>
                <NotesTitle title = {title} setTitle={setTitle} />
                <Button as={Link} to = {ROUTES.COMPILED_TO_DO_LIST} variant = "danger" onClick = {deleteNote}>delete</Button>
            </div>
            <ImageBox url = {url} setUrl = {setUrl}/>
            {url?null:<LandscapeLottie style={{ display: url==='' ? "block" : "none" }}/>}
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