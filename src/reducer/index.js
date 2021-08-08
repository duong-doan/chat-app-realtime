import { combineReducers } from 'redux';
import authReducer from '../modules/auth/Login/store/reducer';
import homeReducer from '../modules/home/store/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

export default rootReducer;
