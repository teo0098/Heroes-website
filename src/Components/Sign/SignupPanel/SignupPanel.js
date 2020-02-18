import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sign from '../Sign';
import { useForm } from 'react-hook-form'
import './SignupPanel.scss';
import axios from 'axios';

const SignupPanel = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Sign>
            <form onSubmit={handleSubmit(onSubmit)} className="Sign__form" noValidate autoComplete="off">
                <TextField 
                name="name"
                inputRef={register({ required: true, pattern: { value: /^[A-Z0-9a-z]{5,20}$/,
                        message: "User's name must have from 5 up to 20 alphanumeric characters" } })} 
                id="standard-basic" 
                label="User's name" 
                style={{ margin: '1vh 0' }}
                />
                {errors.name && <p className="Signup__p">{errors.name.message}</p>}

                <TextField 
                name="pass" 
                inputRef={register({ required: true, pattern: { value: /^[A-Z0-9a-z!@#.$]{6,20}$/,
                        message: "Password must have from 6 up to 20 characters [letters, digits, !, @, #, $, .]" } })}
                id="filled-basic1" 
                label="Password" 
                type="password" 
                style={{ margin: '1vh 0' }}
                />
                {errors.pass && <p className="Signup__p">{errors.pass.message}</p>}

                <TextField 
                name="rpass" 
                inputRef={register({required: true, validate: value => {
                    return value === watch('pass') || "Passwords must be the same";
                } })}
                id="filled-basic2" 
                label="Repeat password" 
                type="password" 
                style={{ margin: '1vh 0' }}
                />
                {errors.rpass && <p className="Signup__p">{errors.rpass.message}</p>}
                
                <Button type="submit" variant="contained" color="primary" style={{ margin: '2vh 0' }}>Sign up</Button>
            </form>
        </Sign>
    );
};

export default SignupPanel;