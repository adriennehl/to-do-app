import React, {useState} from 'react';
import NotesTitle from './NotesTitle';
import TextBox from './TextBox';
import CompleteBox from './CompleteBox';
import ImageBox from './ImageBox'
import DateBox from './DateBox.js'
import { Link } from 'react-router-dom';
import* as ROUTES from '../../Constants/routes';
import Button from 'react-bootstrap/Button';
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
    const [key, setKey] = useState('')

    // handler to delete the current note
    const deleteNote= () =>{
        if (key)
            database.ref('notes/' + key).remove()
    };
    
    // const gotData = data => {
    //     var element = data.val()
    //     console.log(element)
    //     setTitle(element.title);
    //     setCreated(element.createdDate);
    //     setDue(element.dueDate);
    //     setText(element.text);
    //     setUrl(element.url);
    //     setDone(element.isDone);          
    // };

    // // check if props is accessing an existing note and get values if so
    // if (props.load){
    //     key = props.key
    //     database.ref('notes/-M9WiCBAAgYyTj0eTW99').on('value', gotData)
    // }

    const handleSave= ()=>{
        var note = {
            title: title,
            createdDate: createdDate,
            dueDate: dueDate,
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
                Date Created:<DateBox createdDate = {createdDate} setCreated={setCreated}/> 
                Due Date:<DateBox dueDate = {dueDate} setDue={setDue}/>
            </div> 
            <TextBox text = {text} setText={setText} className = 'flex-container-col'/>
            <div className = 'flex-container-row'>
                <Button to={ROUTES.COMPILED_TO_DO_LIST} onClick={handleSave}>Save</Button>
                <CompleteBox isDone = {isDone} setDone = {setDone} /> 
            </div>
        </div>
    )
}

export default ToDoNote;