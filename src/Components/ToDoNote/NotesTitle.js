import React from 'react';
import ContentEditable from 'react-contenteditable';

function NotesTitle(props){

    const handleChange = evt => {
        props.setTitle(evt.target.value)
    };

    return(
        <ContentEditable
            html = {props.title}
            disable = {false}
            className = 'title'
            onChange = {handleChange}
        />
    )

}

export default NotesTitle;