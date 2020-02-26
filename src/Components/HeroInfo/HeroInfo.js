import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import './HeroInfo.scss';
import HeroIntro from './HeroIntro/HeroIntro';
import HeroDetails from './HeroDetails/HeroDetails';
import Error from '../Error/Error';

const HeroInfo = (props) => {
    const message = 'Unable to fetch hero, please try again later.';
    const [heroInfo, setHeroInfo] = useState({});
    const [spinner, setSpinner] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        let setTime;
        const getHeroInfo = async () => {
            try {
                const hero = await axios.get(`/sheroes/hero/${props.match.params.callname}`);
                if (hero.data.error) throw new Error();
                setHeroInfo(hero.data.hero);
                setTime = setTimeout(() => {
                    setSpinner(false);
                }, 300);
            } catch(error) {
                setError(true);
                setSpinner(false);
            }
        };
        getHeroInfo();
        return () => clearTimeout(setTime);
    }, [props.match.params.callname]);

    return (
        <div className="HeroInfo">
            {error === true ?
            <Error> {message} </Error>
            :
            spinner === true ?
                <Spinner/>
                :
                <React.Fragment>
                    <HeroIntro picture={heroInfo.picture}>{heroInfo.callname}</HeroIntro>
                    <HeroDetails {...heroInfo}/>
                </React.Fragment>
            }
        </div>
    );
};

export default HeroInfo;