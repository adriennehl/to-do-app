import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import ToDoNote from "../ToDoNote";
import CompiledToDoList from "../CompiledToDoList";


import * as ROUTES from '../../Constants/routes';
import { withFirebase } from '../Firebase';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotificationContainer } from 'react-notifications'
import withAuthentication from "../Session/withAuthentication";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            },
        );
    }
    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser}/>


                    <Route exact path={ROUTES.LANDING} component={Landing}/>
                    <Route path={ROUTES.EDIT_NOTE} component={ToDoNote}/>
                    <Route path={ROUTES.NEW_NOTE} component={ToDoNote}/>
                    <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                    <Route path={ROUTES.COMPILED_TO_DO_LIST} component={CompiledToDoList}/>
                    <Route
                        exact
                        path={ROUTES.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <NotificationContainer/>
                </div>
            </Router>
        );
    }
}

export default withAuthentication(withFirebase(App));