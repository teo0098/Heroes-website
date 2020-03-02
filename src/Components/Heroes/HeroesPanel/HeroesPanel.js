import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero/Hero';
import Spinner from '../../Spinner/Spinner';
import Pagination from './../Pagination/Pagination';
import './HeroesPanel.scss';
import Error from '../../Error/Error';

const HeroesPanel = props => {
    const message = 'Unable to fetch heroes, please try again later.';
    const [heroes, setHeroes] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let setTime;
        const getHeroes = async () => {
            setSpinner(true);
            try {
                const sheroes = await axios.get(`/sheroes/${props.match.params.limit}`);
                if (sheroes.data.error) throw new Error();
                setHeroes(sheroes.data.heroes);
                setTime = setTimeout(() => {
                    setSpinner(false);
                }, 300);
            } catch(error) {
                setError(true);
                setSpinner(false);
            }
        };
        getHeroes();
        return () => clearTimeout(setTime);
    }, [props.match.params.limit]);

    return (
        <div className="HeroesPanel">
            {error === true ?
                <Error> {message} </Error>
                :
                spinner === true || heroes.length === 0 ?
                    <Spinner/>
                    :
                    <React.Fragment>
                        <div className="HeroesPanel__div">
                            {heroes.map((hero, index) => <Hero key={hero.callname} info={hero} delay={index + 1}/>)}
                        </div>
                        <Pagination/>
                    </React.Fragment>
            }
        </div>
    )
};

export default HeroesPanel;