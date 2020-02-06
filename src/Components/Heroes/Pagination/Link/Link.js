import React from 'react';
import './Link.scss';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    return (
        <NavLink to={`/heroes/${props.limit}`} activeClassName="Link--active" className="Link">{props.limit}</NavLink>
    );
};

export default Link;