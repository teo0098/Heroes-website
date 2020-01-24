import React from 'react';
import Logo from './Logo/Logo';
import NavigationStyles from './Navigation.module.scss';
import Nav from './Nav/Nav';
import Login from './Login/Login';

const Navigation = () => (
    <header className={NavigationStyles.Navigation}>
        <Logo/>
        <Nav/>
        <Login/>
    </header>
);

export default Navigation;