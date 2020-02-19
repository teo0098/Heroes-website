import React from 'react';
import './LoginPanel.scss';
import { Link } from 'react-router-dom';
import Sign from '../Sign';
import FormLogin from '../Forms/FormLogin';

const LoginPanel = () => (
    <Sign>
        <FormLogin />
        <Link to="/signup" className="LoginPanel__Link">SIGN UP</Link>
    </Sign>
);

export default LoginPanel;