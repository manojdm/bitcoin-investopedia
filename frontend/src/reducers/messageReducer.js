import { DELETE_MESSAGE_DISPATCH, DELETE_MESSAGE_FAIL, DELETE_MESSAGE_SUCCESS, GET_MESSAGE_DISPATCH, GET_MESSAGE_FAIL, GET_MESSAGE_SUCCESS, SAVE_MESSAGE_DISPATCH, SAVE_MESSAGE_FAIL, SAVE_MESSAGE_SUCCESS } from "../constants/messageConstants";

const saveMessagesReducer = (state = {}, action) => {
    switch(action.type){
        case SAVE_MESSAGE_DISPATCH:
            return {loading: true, success: false}
        case SAVE_MESSAGE_SUCCESS:
            return {loading: false, success: true, messages: action.payload}
        case SAVE_MESSAGE_FAIL:
            return {loading: false, success: false}
        default:
            return false
    }
}

const getMessagesReducer = (state = {}, action) => {
    switch(action.type){
        case GET_MESSAGE_DISPATCH:
            return {loading: true, success: false}
        case GET_MESSAGE_SUCCESS:
            return {loading: false, success: true, messages: action.payload}
        case GET_MESSAGE_FAIL:
            return {loading: false, success: false}
        default:
            return false
    }
}

const deleteMessagesReducer = (state = {}, action) => {
    switch(action.type){
        case DELETE_MESSAGE_DISPATCH:
            return {loading: true, success: false}
        case DELETE_MESSAGE_SUCCESS:
            return {loading: false, success: true, action: action.payload}
        case DELETE_MESSAGE_FAIL:
            return {loading: false, success: false}
        default:
            return false
    }
}

export {saveMessagesReducer, getMessagesReducer, deleteMessagesReducer}