import React from 'react';
import './Heroes.scss';
import HeroesPanel from './HeroesPanel/HeroesPanel';

const Heroes = (props) => (
    <div className="Heroes">
        <HeroesPanel {...props}/>
    </div>
);

export default Heroes;