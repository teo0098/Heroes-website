import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from './Login.module.scss';

const Login = () => (
    <Link className={LoginStyles.Login} to="/login">
        Log in
        <i className={`fas fa-door-open ${LoginStyles.Login__icon}`}></i>
    </Link>
);

export default Login;