import React, {useState} from 'react';
import * as firebase from "firebase/app";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import* as ROUTES from '../../Constants/routes';
import { Link, useHistory } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import "firebase/auth"

function SignUp (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    let history = useHistory();

    const handleSubmit = evt => {
        evt.preventDefault();
        firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res => {
            NotificationManager.success('Email: ' + res.user.email, 'Signed Up!', 2000);
            history.push(ROUTES.SIGN_IN)
        })
        .catch(evt=>{
            setErrors(evt.message);
        })
    };
    
    const changeEmail = evt => {
        setEmail(evt.target.value)
    };

    const changePassword = evt => {
        setPassword(evt.target.value)
    };

    return (
        <div>
            <h1>SignUp</h1>
            <Form className = 'p-5 m-5 border' > 
                <Form.Group>
                    <Form.Control placeholder="Email" onChange = {changeEmail} type = 'email' html = {email}/>
                    <Form.Control placeholder="Password" onChange = {changePassword} type = 'password' html = {password}/>
                    <Button variant="primary" onClick={handleSubmit}>Sign up</Button>
                    <Button as = {Link} variant='light' to = {ROUTES.LANDING}>Cancel</Button>
                </Form.Group>
                <span>{error}</span>
            </Form>  
        </div>
    );
}

export default SignUp;