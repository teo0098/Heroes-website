import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormLogin = () => {
    return (
        <form className="Form" noValidate autoComplete="off">
            <TextField id="standard-basic" label="User's name" style={{ margin: '1vh 0' }}/>
            <TextField id="filled-basic" label="Password" type="password" style={{ margin: '1vh 0' }}/>
            <Button variant="contained" color="primary" style={{ margin: '2vh 0' }}>Log in</Button>
        </form>
    );
};

export default FormLogin;