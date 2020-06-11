import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';

function ImageBox(props){
    const [display, setDisplay] = useState('none');

    const handleChange = evt => {
        props.setUrl(evt.target.value)
    };

    const toggleInput = () => {
        setDisplay(display==='none'?'block':'none')
    }


    return(
        <>
            <input
            html = {props.url}
            contenteditable="true"
            onChange = {handleChange}
            style = {{display:display}}
            placeholder = 'Paste Image Url here'
            />
            <Image alt = 'Click to Show/Hide Image Url' src={props.url} 
            onClick={toggleInput}
            width= {500} height={300}
            style={{'fontSize':'large'}}
            fluid/>
        </>
    )

}

export default ImageBox;