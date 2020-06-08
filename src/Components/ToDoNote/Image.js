import React from 'react';
import * as firebase from "firebase/app";
import "firebase/database";

function Image(props){
    var database = firebase.database();
    var element = 'Click to show/hide img url';
    var ref = database.ref('notes/' + props.Id + '/img');

    const gotData = data => {
	    element = data.val()
    };
    ref.on('value', gotData);

    const handleChange = evt => {
        database.ref('notes/' + props.Id).update({
            img: evt.target.value
        });
        document.getElementById('myImg').src=evt.target.value
    };

    const toggleInput = () => {
       if (document.getElementById('urlInput').style.display=='none')
            document.getElementById('urlInput').style.display='block'
        else
            document.getElementById('urlInput').style.display='none'
    }


    return(
        <>
            <input
            html = {element}
            contenteditable="true"
            onChange = {handleChange}
            id = 'urlInput'
            style = {{display:'none'}}
            />
            <img alt = 'Click to Show/Hide Url' id = 'myImg' src={element} 
            onClick={toggleInput}
            width= {500} height={300}
            style={{'fontSize':'large'}}/>
        </>
    )

}

export default Image;