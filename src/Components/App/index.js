import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Navigation from '../Navigation'
import CompiledToDoList from "../CompiledToDoList";
import Landing from "../Landing";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ToDoNote from "../ToDoNote";
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationContainer } from 'react-notifications'

import * as ROUTES from '../../Constants/routes'
const App = () => (
    <Router>
        <Navigation />

        <Route exact path= {ROUTES.LANDING} component={Landing} />
        <Route path = {ROUTES.EDIT_NOTE} component={ToDoNote} />
        <Route path = {ROUTES.NEW_NOTE} component={ToDoNote}/>
        <Route path = {ROUTES.SIGN_IN} component={SignIn} />
        <Route path = {ROUTES.SIGN_UP} component={SignUp} />
        <Route path = {ROUTES.COMPILED_TO_DO_LIST} component={CompiledToDoList} />
        <NotificationContainer/>

    </Router>
);

export default App;