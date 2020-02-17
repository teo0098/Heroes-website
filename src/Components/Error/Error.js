import React from 'react';
import './Error.scss';

const Error = (props) => (
    <React.Fragment>
        <i className="fas fa-exclamation-circle Error__errorIcon"></i>
        <h2 className="Error__h2"> {props.children} </h2>
    </React.Fragment>
);

export default Error;