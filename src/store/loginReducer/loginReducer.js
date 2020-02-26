const loginReducer = (state = { user: 'GUEST', token: '', spinner: false, msg: '', username: '' }, action) => {
    switch(action.type) {
        case 'LOGGED':
            return {
                user: 'LOGGED',
                token: action.token,
                spinner: false,
                msg: '',
                username: action.username
            };
        case 'ERROR':
            return {
                user: 'ERROR',
                token: '',
                spinner: false,
                msg: 'Unable to log you in, please try again later.',
                username: ''
            };
        case 'NOT EXISTS':
            return {
                user: 'NOT EXISTS',
                token: '',
                spinner: false,
                msg: 'Unable to login. Wrong credentials.',
                username: ''
            };
        case 'LOGGING':
            return {
                user: 'LOGGING',
                token: '',
                spinner: true,
                msg: '',
                username: ''
            };
        case 'GUEST':
            return {
                user: 'GUEST',
                token: '',
                spinner: false,
                msg: '',
                username: ''
            }
        case 'LOGGEDOUT':
            return {
                user: 'LOGGEDOUT',
                token: '',
                spinner: false,
                msg: 'Logged out successfully',
                username: ''
            }
        default:
            return state;
    }
};

export default loginReducer;