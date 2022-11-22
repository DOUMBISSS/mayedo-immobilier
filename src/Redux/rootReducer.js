import { combineReducers } from "redux";
import { homeReducer } from './homeReducer';
import { rentHomeReducer } from "./rentHomeReducer";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
    homeReducer : homeReducer,
    rentHomeReducer : rentHomeReducer,
    userReducer : userReducer,
})