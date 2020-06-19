import React,{useState} from 'react';
import Image from 'react-bootstrap/Image';

function ImageBox(props){
    const [display, setDisplay] = useState('none');
    var height = props.url ? '250px':'20px';

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
            style={{fontSize:'large', paddingTop:'5px',
            width: '500px', height:height}}
            fluid/>
        </>
    )

}

export default ImageBox;