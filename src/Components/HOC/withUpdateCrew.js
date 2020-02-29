import React, { useState } from 'react';
import axios from 'axios';

const withUpdateCrew = (WrappedComponent) => {
    return props => {
        const [msg, setMsg] = useState('');
        const [spinner, setSpinner] = useState(false);
        
        const addHero = async () => {
            setSpinner(true);
            try {
                const data = await axios.patch(`/crew/add`, { hero: props.callname }, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
                if (data.data.error) setMsg(data.data.error);
                else if (data.data.exists) setMsg(data.data.exists);
                else setMsg(data.data.success);
                setTimeout(() => {
                    setSpinner(false);
                }, 1000);
            } catch(error) {
                setTimeout(() => {
                    setSpinner(false);
                }, 1000);
                setMsg('Unable to add hero, pleasy try again later.');
            }
        };

        return (
            <WrappedComponent spinner={spinner} msg={msg} addHero={addHero} {...props}/>
        );
    }
};

export default withUpdateCrew;