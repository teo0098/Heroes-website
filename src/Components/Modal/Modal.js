import React, { useState, useEffect } from 'react';
import './Modal.scss';
import {Transition} from 'react-spring/renderprops';

const Modal = props => {
    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        let setTime;
        setTime = setTimeout(() => {
            setShowModal(false);
        }, 4000);
        return () => clearTimeout(setTime);
    }, []);
    return (
        showModal === true ?
        <div className="Modal">
            <Transition
            items={showModal}
            from={{ opacity: 0, transform: 'translateY(-10vh)' }}
            enter={{ opacity: 1, transform: 'translateY(10vh)' }}
            leave={{ opacity: 0, transform: 'translateY(-10vh)' }}
            config={{ duration: 500 }}
            >
                {showModal => showModal && (props2 =>
                    <div style={props2}>
                        <div className="Modal__msg">
                            {props.children}
                        </div>
                    </div>
                )}
            </Transition>
        </div> 
        :
        null
    );
}   

export default Modal;