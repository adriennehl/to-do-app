import React from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function DateBox(props){

    const handleCreatedChange = date => {
        props.setCreated(new Date(date))
    };

    const handleDueChange = date =>{
        props.setDue(new Date(date))
    }

    return (
        <DatePicker
            className = 'date'
            placeholderText="Click to select a date"
            selected={(props.createdDate ? props.createdDate:props.dueDate)}
            onChange = {(props.createdDate ? handleCreatedChange:handleDueChange)}
        />
    )
}

export default DateBox