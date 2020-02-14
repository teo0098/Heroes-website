import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero/Hero';
import Spinner from '../../Spinner/Spinner';

const HeroesPanel = (props) => {
    const [heroes, setHeroes] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const getHeroes = async () => {
            try {
                const sheroes = await axios.get(`/sheroes`);
                const data = sheroes.data.heroes;
                setHeroes(data);
                setSpinner(false);
            } catch(error) {
                console.log("ERROR");
            }
        };
        getHeroes();
    }, []);

    useEffect(() => {
        let setTime;
        const getHeroes = async () => {
            setSpinner(true);
            try {
                const sheroes = await axios.get(`/sheroes/${props.match.params.limit}`);
                const data = sheroes.data.heroes;
                setHeroes(data);
                setTime = setTimeout(() => {
                    setSpinner(false);
                }, 300);
            } catch(error) {
                console.log("ERROR");
            }
        };
        getHeroes();
        return () => clearTimeout(setTime);
    }, [props.match.params.limit]);

    return (
        <React.Fragment>
            {spinner === true ?
                <Spinner/>
                :
                <div className="Heroes__div">
                    {heroes.map((hero, index) => <Hero key={hero.callname} info={hero} delay={index + 1}/>)}
                </div>
            }
        </React.Fragment>
    )
};

export default HeroesPanel;