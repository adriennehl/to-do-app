import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import* as ROUTES from '../../Constants/routes';

const Background = styled.div`
    background: powderblue;
`;


const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);


const NavigationAuth = () => (
    <Background>
            <SignOutButton />
    </Background>
);

const NavigationNonAuth = () => (
    <Background>
    </Background>
);

export default Navigation;