import { combineReducers } from 'redux';
import registerReducer from './registerReducer/registerReducer';
import loginReducer from './loginReducer/loginReducer';

export default combineReducers({
    registerReducer,
    loginReducer
});