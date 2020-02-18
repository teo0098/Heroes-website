import React from 'react';
import './Sign.scss';

const Sign = (props) => {
    return (
        <div className="Sign">
            <section className="Sign__section">
                {props.children}
            </section>
        </div>
    );
};

export default Sign;