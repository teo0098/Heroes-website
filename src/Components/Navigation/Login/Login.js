import React from 'react';
import { Link } from 'react-router-dom';
import LoginStyles from './Login.module.scss';
import { connect } from 'react-redux';
import mapLoginDispatchToProps from '../../../store/loginReducer/loginAction';
import Modal from '../../Modal/Modal';
import { Redirect } from 'react-router-dom';

const Login = props => {
    const logOut = () => {
        props.loggedOut();
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setTimeout(() => {
            props.guest();
        }, 3000);
    };

    return (
        <React.Fragment>
            {sessionStorage.getItem('token') === null ?
            <Link className={LoginStyles.Login} to="/login">
                Log in
                <i className={`fas fa-door-open ${LoginStyles.Login__icon}`}></i>
            </Link>
            :
            <section className={`${LoginStyles.Login} ${LoginStyles.Login__logged}`}>
                <strong> {sessionStorage.getItem('user')} </strong>
                <i className={`fas fa-user ${LoginStyles.Login__icon}`}></i>
                <ul className={LoginStyles.Login__ul}>
                    <li className={LoginStyles.Login__li}>
                        <Link className={LoginStyles.Login__Link} to='/my-crew'>
                            My crew
                            <i className={`fas fa-users ${LoginStyles.Login__icon}`}></i>
                        </Link>
                    </li>
                    <li onClick={logOut} style={{ padding: '2vh 0' }} className={LoginStyles.Login__li}>Log out</li>
                </ul>
            </section>
            }
            {props.user === 'LOGGEDOUT' ?
            <React.Fragment>
                <Modal> {props.msg} </Modal>
                <Redirect to='/login'/>
            </React.Fragment>
            :
            null
            }
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        user: state.loginReducer.user,
        username: state.loginReducer.username,
        msg: state.loginReducer.msg
    };
};

export default connect(mapStateToProps, mapLoginDispatchToProps)(Login);