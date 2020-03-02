import React, { useState, useEffect } from 'react';
import './MyCrew.scss';
import axios from 'axios';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import TableCrew from './TableCrew/TableCrew';
import { Spring } from 'react-spring/renderprops';
import Modal from '../Modal/Modal';

const MyCrew = () => {
    const [msg, setMsg] = useState('');
    const [heroes, setHeroes] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [error, setError] = useState(false);

    const removeHero = async hero => {
        setSpinner(true);
        try {
            const removedHero = await axios.delete(`/crew/del/${hero}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
            if (removedHero.data.error) throw new Error();
            setTimeout(() => {
                setSpinner(false);
            }, 500);
            setMsg(removedHero.data.success);
            setHeroes(removedHero.data.newHeroes);
        } catch(error) {
            setMsg('Unable to remove hero, please try again later.');
            setError(true);
            setTimeout(() => {
                setSpinner(false);
            }, 500);
        }
    };

    useEffect(() => {
        let setTime;
        const getHeroes = async () => {
            setSpinner(true);
            try {
                const crew = await axios.get(`/crew`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } });
                if (crew.data.error) throw new Error();
                setHeroes(crew.data.crew);
                setTime = setTimeout(() => {
                    setSpinner(false);
                }, 300);
            } catch(error) {
                setMsg('Unable to fetch your crew, pleasy try again later.');
                setError(true);
                setSpinner(false);
            }
        };
        getHeroes();
        return () => clearTimeout(setTime);
    }, []);

    return (
        sessionStorage.getItem('user') !== null ?
            <div className="MyCrew">
                {error === true ?
                    <Error> {msg} </Error>
                    :
                    spinner === true ?
                        <Spinner/>
                        :
                        <div className="MyCrew__table">
                            <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ duration: 1000 }}
                            >
                                {props2 => (
                                    <div style={props2}>
                                        <TableCrew removeHero={removeHero} heroes={heroes}/>
                                    </div>
                                )}
                            </Spring>
                            {msg !== '' ?
                                <Modal> {msg} </Modal>
                                :
                                null
                            }
                        </div>
                }
            </div>
            :
            <Redirect to='/'/>
    );
};

export default MyCrew;