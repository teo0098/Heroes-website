import React from 'react';
import Sign from '../Sign';
import FormSignup from '../Forms/FormSignUp';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import Modal from '../../Modal/Modal';

const SignupPanel = props => {
    return (
        <Sign>
            {props.spinner === true ?
                <Spinner/>
                :
                props.user !== 'GUEST' ?
                <Modal> {props.msg} </Modal>
                :
                null
            }
            <FormSignup/>
        </Sign>
    );
};

const mapStateToProps = state => {
    return {
        user: state.registerReducer.user,
        spinner: state.registerReducer.spinner,
        msg: state.registerReducer.msg
    };
};

export default connect(mapStateToProps)(SignupPanel);