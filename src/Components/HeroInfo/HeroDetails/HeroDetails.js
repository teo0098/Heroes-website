import React, { useEffect, useState, useRef } from 'react';
import './HeroDetails.scss';
import {Transition} from 'react-spring/renderprops'

const HeroDetails = (props) => {
    const ref = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    const scrollPage = () => {
        if (window.pageYOffset > ref.current.offsetTop - 500) setScrolled(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollPage);
        return () => window.removeEventListener('scroll', scrollPage);
    }, []);

    return (
        <section ref={ref} className="HeroDetails">
            <Transition
            items={scrolled}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            config={{ duration: 2000 }}
            >
                {scrolled => scrolled && (props2 => 
                    <div className="HeroDetails__Transition" style={props2}>
                        <i className="fas fa-info-circle HeroDetails__icon"></i>
                        <ul className="HeroDetails__ul">
                            <li className="HeroDetails__li">Call name: {props.callname} </li>
                            <li className="HeroDetails__li">Real name: {props.realname} </li>
                            <li className="HeroDetails__li">Place of birth: {props.birthPlace} </li>
                            <li className="HeroDetails__li">Abilities:
                                <ul className="HeroDetails__ul">
                                    {props.abilities.map((ability, index) => <li className="HeroDetails__li" key={index}> {ability} </li>)}
                                </ul>
                            </li>
                            <li className="HeroDetails__li HeroDetails__li--agroups">Associated groups:
                                <ul className="HeroDetails__ul">
                                    {props.agroups.map((agroup, index) => <li className="HeroDetails__li" key={index}> {agroup} </li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </Transition>
        </section>
    );
};

export default HeroDetails;