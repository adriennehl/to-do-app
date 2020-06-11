import React from 'react';

function CompleteBox (props){

    const handleClick = () => {
        props.setDone(!props.isDone)
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