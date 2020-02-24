import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import mapLoginDispatchToProps from '../../../store/loginReducer/loginAction';
import axios from 'axios';

const FormLogin = props => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async formData => {
        props.logging();
        try {
            const dbData = {
                username: formData.name,
                password: formData.pass
            };
            const login = await axios.post('/users/login', dbData);
            if (login.data.user === 'NOT EXISTS') return props.notExists();
            else if (login.data.user === 'ERROR') throw new Error();
            props.logged(login.data.user);
        } catch(error) {
            props.error();
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" noValidate autoComplete="off">
            <TextField 
                inputRef={register({ required: true })}
                name="name" 
                id="standard-basic" 
                label="User's name" 
                style={{ margin: '1vh 0' }}/>
            <TextField 
                inputRef={register({ required: true })}
                name="pass" 
                id="filled-basic" 
                label="Password" 
                type="password" 
                style={{ margin: '1vh 0' }}/>
            <Button type="submit" variant="contained" color="primary" style={{ margin: '2vh 0' }}>Log in</Button>
        </form>
    );
};

export default connect(null, mapLoginDispatchToProps)(FormLogin);