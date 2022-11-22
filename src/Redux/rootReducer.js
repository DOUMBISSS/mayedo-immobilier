import { combineReducers } from "redux";
import { homeReducer } from './homeReducer';
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
    homeReducer : homeReducer,
    userReducer : userReducer,
})