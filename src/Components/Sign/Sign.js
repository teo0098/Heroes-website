import React from 'react';
import './Sign.scss';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

const Sign = props => {
    return (
        sessionStorage.getItem('token') === null ?
        <div className="Sign">
            <section className="Sign__section">
                {props.children}
            </section>
        </div>
        :
        <Redirect to='/'/>
    );
};

const mapStateToProps = state => {
    return {
        user: state.loginReducer.user
    };
};

export default connect(mapStateToProps)(Sign);