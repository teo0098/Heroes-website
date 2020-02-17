import React from 'react';
import './LoginPanel.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const LoginPanel = () => {
    return (
        <div className="LoginPanel">
            <section className="LoginPanel__section">
                <form className="LoginPanel__form" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="User's name" style={{ margin: '1vh 0' }}/>
                    <TextField id="filled-basic" label="Password" type="password" style={{ margin: '1vh 0' }}/>
                    <Button variant="contained" color="primary" style={{ margin: '2vh 0' }}>Log in</Button>
                </form>
                <Link to="/signup" className="LoginPanel__Link">SIGN UP</Link>
            </section>
        </div>
    );
};

export default LoginPanel;