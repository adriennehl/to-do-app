import React from 'react';

function TextBox(props){

    const handleChange = evt => {
        props.setText(evt.target.value)
    };

    return(
        <textarea
            value = {props.text}
            onChange = {handleChange}
            placeholder = {'Click to edit text'}
            style ={{fontSize:'large'}}
        />
    )

}

export default TextBox;