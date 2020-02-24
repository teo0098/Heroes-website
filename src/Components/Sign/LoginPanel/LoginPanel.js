import React from 'react';
import './LoginPanel.scss';
import { Link } from 'react-router-dom';
import Sign from '../Sign';
import FormLogin from '../Forms/FormLogin';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import Modal from '../../Modal/Modal';

const LoginPanel = props => (
    <Sign>
        {props.spinner === true ?
            <Spinner/>
            :
            props.user === 'ERROR' || props.user === 'NOT EXISTS' ?
            <Modal> {props.msg} </Modal>
            :
            null
        }
        <FormLogin />
        <Link to="/signup" className="LoginPanel__Link">SIGN UP</Link>
    </Sign>
);

const mapStateToProps = state => {
    return {
        user: state.loginReducer.user,
        spinner: state.loginReducer.spinner,
        msg: state.loginReducer.msg
    };
};

export default connect(mapStateToProps)(LoginPanel);