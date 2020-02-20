const registerReducer = (state = { user: "GUEST", spinner: false, msg: '' }, action) => {
    switch(action.type) {
        case 'REGISTERING':
            return {
                user: 'REGISTERING',
                spinner: true,
                msg: ''
            }
        case 'ERROR':
            return {
                user: 'ERROR',
                spinner: false,
                msg: 'Unable to sign you up, please try again later.'
            }
        case 'REGISTERED':
            return {
                user: 'REGISTERED',
                spinner: false,
                msg: 'Signed up successfully.'
            }
        case 'EXISTS':
            return {
                user: 'EXISTS',
                spinner: false,
                msg: 'This user\'s name has been already taken.'
            }
        case 'GUEST':
            return {
                user: 'GUEST',
                spinner: false,
                msg: ''
            } 
        default: 
            return state;
    }
};

export default registerReducer;