const mapRegisterDispatchToProps = dispatch => {
    return {
        error: () => dispatch({ type: 'ERROR' }),
        registered: () => dispatch({ type: 'REGISTERED' }),
        exists: () => dispatch({ type: 'EXISTS' }),
        guest: () => dispatch({ type: 'GUEST' }),
        signingUp: () => dispatch({ type: 'REGISTERING' })
    };
};

export default mapRegisterDispatchToProps;