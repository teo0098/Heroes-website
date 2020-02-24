const mapLoginDispatchToProps = dispatch => {
    return {
        error: () => dispatch({ type: 'ERROR' }),
        logged: data => dispatch({ type: 'LOGGED', username: data.username, token: data.token }),
        notExists: () => dispatch({ type: 'NOT EXISTS' }),
        logging: () => dispatch({ type: 'LOGGING' }),
        guest: () => dispatch({ type: 'GUEST' })
    };
};

export default mapLoginDispatchToProps;