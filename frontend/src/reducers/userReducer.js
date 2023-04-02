import { USER_CREATE_DISPATCH, USER_CREATE_FAIL, USER_CREATE_SUCCESS, USER_LOGIN_DISPATCH, USER_LOGIN_FAIL, USER_LOGIN_RESET, USER_LOGIN_SUCCESS } from "../constants/userConstants";

const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LOGIN_DISPATCH:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, success: true, userData: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, success: false}
        case USER_LOGIN_RESET:
            return {}
        default:
            return state
    }
}

const userCreateReducer = (state = {}, action) => {
    
    switch(action.type){
        case USER_CREATE_DISPATCH:
            return {loading: true}
        case USER_CREATE_SUCCESS:
            return {loading: false, success: true}
        case USER_CREATE_FAIL:
            return {loading: false, success: false}
        default:
            return false
    }
}

export {userCreateReducer, userLoginReducer}