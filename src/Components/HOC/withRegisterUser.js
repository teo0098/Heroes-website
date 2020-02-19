import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import axios from 'axios';

const withRegisterUser = Component => {
    return props => {
        let modal = null;
        const [user, setUser] = useState('');
        const [spinner, setSpinner] = useState(true);
        const [error, setError] = useState(false);
        useEffect(() => {
            const registerUser = async () => {
                setSpinner(true);
                try {
                    const register = await axios.post('/users', props.user);
                } catch(error) {
                    console.log("ERROR");
                }
            }
            registerUser();
        }, [props.user]);
        return (
            <React.Fragment>
                <Component {...props}/>
                <Modal>
                    {user}
                </Modal>
            </React.Fragment>
        ) 
    } 
};

export default withRegisterUser;