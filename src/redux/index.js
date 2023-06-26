import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const Redux = combineReducers({
        userReducer: userReducer
})