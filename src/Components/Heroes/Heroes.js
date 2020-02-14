import React from 'react';
import './Heroes.scss';
import Pagination from './Pagination/Pagination';
import HeroesPanel from './HeroesPanel/HeroesPanel';

const Heroes = (props) => (
    <div className="Heroes">
        <HeroesPanel {...props}/>
        <Pagination/>
    </div>
);

export default Heroes;