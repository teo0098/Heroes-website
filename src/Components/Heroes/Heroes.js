import React, { useEffect } from 'react';
import axios from 'axios';

const Heroes = () => {
    useEffect(() => {
        const getHeroes = async () => {
            try {
                const heroes = await axios.get('/sheroes');
                console.log(heroes);
            } catch(error) {
                console.log("ERROR");
            }
        }
        getHeroes();
    }, []);

    return (
        <div>

        </div>
    );
};

export default Heroes;