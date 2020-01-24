import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from './Login.module.scss';

const Login = () => (
    <Link className={LoginStyles.Login} to="/login">Log in</Link>
);

export default Login;