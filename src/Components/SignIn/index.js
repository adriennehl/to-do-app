import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import* as ROUTES from '../../Constants/routes';
import { Link, useHistory } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

import * as firebase from "firebase/app";
import "firebase/auth"


function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    let history = useHistory();

    const handleSubmit = evt => {
        evt.preventDefault();
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(res => {
            NotificationManager.success('Email: ' + res.user.email, 'Signed In!', 2000);
            history.push(ROUTES.COMPILED_TO_DO_LIST)
        } )
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
        <div className = 'flex-container-col'>
            <h1 className = 'flex-container-row'>Sign In</h1>
            <Form className = 'p-5 m-5 border' > 
                <Form.Group>
                    <Form.Control placeholder="Email" type = "email" onChange = {changeEmail}/>
                    <Form.Control placeholder="Password" type = "password" onChange = {changePassword}/>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>Sign In</Button>
                <Button as = {Link} variant='light' to = {ROUTES.LANDING}>Cancel</Button>
            </Form>
            <span>{error}</span> 
        </div>
    );
}

export default SignIn;