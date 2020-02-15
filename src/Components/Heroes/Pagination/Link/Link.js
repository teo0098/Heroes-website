import React from 'react';
import './Link.scss';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

const Link = (props) => (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1000 }}>
        {props2 => (
            <div style={props2}>
                <NavLink to={`/heroes/${props.limit}`} activeClassName="Link--active" className="Link">{props.limit}</NavLink>
            </div>
        )}
    </Spring>
);

export default Link;