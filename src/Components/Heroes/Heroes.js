import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './Hero/Hero';
import './Heroes.scss';
import Pagination from './Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

const Heroes = (props) => {
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
        const getHeroes = async () => {
            setSpinner(true);
            try {
                const sheroes = await axios.get(`/sheroes/${props.match.params.limit}`);
                const data = sheroes.data.heroes;
                setHeroes(data);
                setSpinner(false);
            } catch(error) {
                console.log("ERROR");
            }
        };
        getHeroes();
    }, [props.match.params.limit]);

    return (
        <div className="Heroes">
            {spinner === true ?
                <Spinner/>
                :
                <React.Fragment>
                    <div className="Heroes__div">
                        {heroes.map(hero => <Hero key={hero.callname} info={hero}/>)}
                    </div>
                    <Pagination/>
                </React.Fragment>
            }
        </div>
    );
};

export default Heroes;