import React from 'react';
import './HeroIntro.scss';
import { Spring } from 'react-spring/renderprops';

const HeroIntro = (props) => (
    <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ duration: 1000 }}
    >
        {props2 => (
            <div className="HeroIntro__Spring" style={props2}>
                <header className="HeroIntro__header" style={{ backgroundImage: `url(${props.picture})` }}>
                    <h1 className="HeroIntro__h1"> {props.children} </h1>
                </header>
            </div>
        )}
    </Spring>
);

export default HeroIntro;