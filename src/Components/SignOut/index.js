import React from 'react';

import { withFirebase } from '../Firebase';
import {withRouter} from "react-router";

const SignOutButton = ({ firebase }) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);