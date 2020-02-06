import React from 'react';
import './Hero.scss';

const Hero = (props) => (
    <section className="Hero">
        <i className="fas fa-user-secret Hero__icon"></i>
        <h3 className="Hero__h2">{props.info.callname}</h3>
    </section>
);

export default Hero;