import React from 'react';
import WorkingLottie from './WorkingLottie.jsx'
import Button from 'react-bootstrap/Button';
import* as ROUTES from '../../Constants/routes';
import { Link } from 'react-router-dom';

function Landing(props){
    return(
        <div className = 'flex-container-col' style ={{backgroundColor:'#e5fffd'}}>
            <h1 className ='title flex-container-row'>Welcome to the To Do App</h1>
            <WorkingLottie/>
            <Button as = {Link} variant ='info' to={ROUTES.SIGN_IN}>Sign In</Button>
            <Button as = {Link} variant ='info' to={ROUTES.SIGN_UP}>Sign Up</Button>
            <Button as = {Link} variant ='light' to={ROUTES.COMPILED_TO_DO_LIST}>Continue as Guest</Button>
        </div>
    )
}

export default Landing;