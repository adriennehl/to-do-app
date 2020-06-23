import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../Constants/routes';
import { withFirebase } from '../Firebase';
import CompiledToDoListBase from "../CompiledToDoList";
import ToDoNote from "../ToDoNote";
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
                    <Navigation authUser={this.state.authUser} />

                    <hr />

                    <Route
                        exact
                        path={ROUTES.LANDING}
                        component={LandingPage}
                    />
                    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route
                        exact
                        path={ROUTES.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <Route exact path ={ROUTES.COMPILED_TO_DO_LIST} component = {CompiledToDoListBase}/>
                    <Route exact path ={ROUTES.TO_DO_NOTE} component = {ToDoNote}/>

                </div>
            </Router>
        );
    }
}

export default withAuthentication(withFirebase(App));