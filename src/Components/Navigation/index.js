import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import* as ROUTES from '../../Constants/routes';


const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);


const NavigationAuth = () => (
    <ul>

        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>

    </ul>
);

export default Navigation;