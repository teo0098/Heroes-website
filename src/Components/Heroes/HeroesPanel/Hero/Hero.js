import React from 'react';
import './Hero.scss';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

const Hero = (props) => (
    <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: props.delay * 200 - 200, duration: 1000 }}
    >
        {props2 => (
            <div className="HeroSpring" style={props2}>
                <Link to={`/heroes/hero/${props.info.callname}`} className="Hero">
                    <i className="fas fa-user-secret Hero__icon"></i>
                    <h3 className="Hero__h2">{props.info.callname}</h3>
                </Link>
            </div>
        )}
    </Spring>
);

export default Hero;