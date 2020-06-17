import React from 'react';
import * as firebase from "firebase/app";
import "firebase/database";

function NotesTitle(props){
    var database = firebase.database();
    var element = '';
    var ref = database.ref('notes/' + props.Id + '/title');

    const gotData = data => {
	    element = data.val()
    };
    ref.on('value', gotData);

    const handleChange = evt => {
        database.ref('notes/' + props.Id).update({
            title: evt.target.value
        });
    };

    return(
        <ContentEditable
            html = {element}
            disable = {false}
            onChange = {handleChange}
            className = 'title'
        />
    )

}

export default NotesTitle;