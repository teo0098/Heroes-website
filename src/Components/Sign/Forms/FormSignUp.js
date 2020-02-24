import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.scss';
import { connect } from 'react-redux';
import axios from 'axios';
import mapRegisterDispatchToProps from '../../../store/registerReducer/registerAction';

const FormSignup = props => {
    const { register, handleSubmit, errors, watch, reset } = useForm();

    useEffect(() => {
        return () => props.guest();
    }, [props]);

    const onSubmit = async formData => {
        props.signingUp();
        try {
            const dbData = {
                username: formData.name,
                password: formData.pass
            };
            const sign = await axios.post('/users', dbData);
            if (sign.data.user === 'EXISTS') return props.exists();
            else if (sign.data.user === 'ERROR') throw new Error();
            props.registered();
        } catch(error) {
            props.error();
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" noValidate autoComplete="off">
            <TextField 
                name="name"
                inputRef={register({ required: true, pattern: { value: /^[A-Z0-9a-z]{5,20}$/,
                        message: "User's name must have from 5 up to 20 alphanumeric characters" } })} 
                id="standard-basic" 
                label="User's name" 
                style={{ margin: '1vh 0' }}
            />
            {errors.name && <p className="Form__p">{errors.name.message}</p>}

            <TextField 
                name="pass" 
                inputRef={register({ required: true, pattern: { value: /^[A-Z0-9a-z!@#.$]{6,20}$/,
                        message: "Password must have from 6 up to 20 characters [letters, digits, !, @, #, $, .]" } })}
                id="filled-basic1" 
                label="Password" 
                type="password" 
                style={{ margin: '1vh 0' }}
            />
            {errors.pass && <p className="Form__p">{errors.pass.message}</p>}
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
            {errors.rpass && <p className="Form__p">{errors.rpass.message}</p>}
            
            <Button type="submit" variant="contained" color="primary" style={{ margin: '2vh 0' }}>Sign up</Button>
        </form>
    );
}

export default connect(null, mapRegisterDispatchToProps)(FormSignup);