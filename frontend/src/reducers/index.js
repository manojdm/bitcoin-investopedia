import { combineReducers } from "redux";
import { saveMessagesReducer, getMessagesReducer, deleteMessagesReducer } from "./messageReducer";
import { userCreateReducer, userLoginReducer } from "./userReducer";

const allReducers = combineReducers({
    userLogin: userLoginReducer,
    messages: getMessagesReducer,
    deleted: deleteMessagesReducer
})

export default allReducers