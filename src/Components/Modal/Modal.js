import React, { useState, useEffect } from 'react';
import './Modal.scss';
import {Transition} from 'react-spring/renderprops';

const Modal = props => {
    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        let setTime;
        setTime = setTimeout(() => {
            setShowModal(false);
        }, 2500);
        return () => clearTimeout(setTime);
    }, []);
    return (
        <Transition
            items={showModal}
            from={{ opacity: 0, transform: 'translateY(-5vh)' }}
            enter={{ opacity: 1, transform: 'translateY(5vh)' }}
            leave={{ opacity: 0, transform: 'translateY(-5vh)' }}
            config={{ duration: 500 }}
        >
            {showModal => showModal && (props2 => 
                <div className="Modal">
                    <div style={props2}>
                        <div className="Modal__msg">
                            {props.children}
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}   

export default Modal;