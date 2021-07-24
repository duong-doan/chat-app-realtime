import { combineReducers } from "redux";
import authReducer from "../modules/auth/Login/store/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
