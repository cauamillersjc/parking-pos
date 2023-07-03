import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { ticketReducer } from "./ticketReducer";

export const Redux = combineReducers({
        userReducer: userReducer,
        ticketReducer: ticketReducer
})