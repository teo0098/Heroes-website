import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import './HeroInfo.scss';
import HeroIntro from './HeroIntro/HeroIntro';
import HeroDetails from './HeroDetails/HeroDetails';

const HeroInfo = (props) => {
    const [heroInfo, setHeroInfo] = useState({});
    const [spinner, setSpinner] = useState(true);
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
                setSpinner(false);
            }
        };
        getHeroInfo();
        return () => clearTimeout(setTime);
    }, [props.match.params.callname]);

    return (
        <div className="HeroInfo">
            {spinner === true ?
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