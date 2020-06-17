import React from 'react';
import * as firebase from "firebase/app";
import "firebase/database";

function Date(props){
    var database = firebase.database();
    var element = ''    
    var ref = database.ref('notes/' + props.Id + '/' + props.element);

    const gotData = data => {
	    element = data.val()
    }

    ref.on('value', gotData);
    
    const handleCreationChange = evt => {
        database.ref('notes/' + props.Id).update({
            date_created: evt.target.value
        });
    };

    const handleDueChange = evt => {
        database.ref('notes/' + props.Id).update({
            date_due: evt.target.value
        });
    };

    return (
        <ContentEditable
            className = 'date'
            html = {element}
            disable = {false}
            onChange = {props.element == 'date_created' ? handleCreationChange:handleDueChange}
        />
    )
}

export default Date