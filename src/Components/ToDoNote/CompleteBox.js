import React from 'react';
import * as firebase from "firebase/app";
import "firebase/database";

function CompleteBox (props){
    var database = firebase.database();
    var element = '';
    var ref = database.ref('notes/' + props.Id + '/isDone');

    const gotData = data => {
	    element = data.val()
    };
    ref.on('value', gotData);

    const handleClick = () => {
        firebase.database().ref('notes/' + props.Id).update({
            isDone: !(element),
        });
        document.getElementById('noteCard').style='background-color:' + (element ?'palegreen':'lightcoral') + ';'
    };

    return (
        <label>
            Completed
            <input onClick = {handleClick} type = 'checkbox'>
            </input>
        </label>
    )
}

export default CompleteBox;