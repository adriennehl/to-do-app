import React from 'react';
import Image from 'react-bootstrap';

function Image(props){
    const [display, setDisplay] = useState('none');

    const handleChange = evt => {
        props.setUrl(evt.target.value)
    };

    const toggleInput = () => {
        setDisplay(display=='none'?'block':'none')
    }


    return(
        <>
            <input
            html = {props.url}
            contenteditable="true"
            onChange = {handleChange}
            style = {{display:display}}
            />
            <Image alt = 'Click to Show/Hide Url' id = 'myImg' src={url} 
            onClick={toggleInput}
            width= {500} height={300}
            style={{'fontSize':'large'}}
            fluid/>
        </>
    )

}

export default Image;