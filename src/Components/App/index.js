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

import * as ROUTES from '../../Constants/routes'
const App = () => (
    <Router>
        <Navigation />

        <Route exact path= {ROUTES.LANDING} component={Landing} />
        <Route path = {ROUTES.TO_DO_NOTE} component={ToDoNote} />
        <Route path = {ROUTES.SIGN_IN} component={SignIn} />
        <Route path = {ROUTES.SIGN_UP} component={SignUp} />
        <Route path = {ROUTES.COMPILED_TO_DO_LIST} component={CompiledToDoList} />

    </Router>
);

export default App;