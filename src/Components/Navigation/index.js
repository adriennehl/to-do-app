import React from 'react';
import { Link } from 'react-router-dom';

import* as ROUTES from '../../Constants/routes';

const Navigation = () => (
    <div>
        <h1>
            Navigation
        </h1>

        <ul>
            <li>
                <Link to={ROUTES.COMPILED_TO_DO_LIST}>All To Do</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Home Page</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Login</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Register</Link>
            </li>
            <li>
                <Link to={ROUTES.TO_DO_NOTE}>Create a Note</Link>
            </li>
        </ul>

    </div>
);

export default Navigation;