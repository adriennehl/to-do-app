import React from 'react';

function CompleteBox (props){

    const handleChange = () => {
        props.setDone(!props.isDone)
    };

    return (
        <label>
            Completed
            <input onChange = {handleChange} type = 'checkbox' checked= {props.isDone}>
            </input>
        </label>
    )
}

export default CompleteBox;