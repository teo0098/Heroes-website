import React, { useState, useEffect } from 'react';

const HeroInfo = (props) => {
    const [heroInfo, setHeroInfo] = useState({});
    useEffect(() => {
        const getHeroInfo = async () => {
            try {
                
            } catch(error) {
                console.log("ERROR");
            }
        };
    }, []);
    return (
        <h1>{props.match.params.callname}</h1>
    );
};

export default HeroInfo;