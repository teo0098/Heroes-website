import React from 'react';
import './Slide.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Slide = (props) => {
    return (
        <TransitionGroup className="SlideFading">
            <CSSTransition
            key={props.img}
            in={true}
            timeout={2500}
            classNames="SlideFade"
            unmountOnExit
            >
                <section className="Slide" style={{ backgroundImage: `url("${props.img}")`}}>
                    <h1 className="Slide__h1">{props.children}</h1>
                </section>
            </CSSTransition>
        </TransitionGroup>
    )
}; 

export default Slide;