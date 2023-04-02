import { USER_CREATE_DISPATCH, USER_CREATE_FAIL, USER_CREATE_SUCCESS, USER_LOGIN_DISPATCH, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../constants/userConstants"
import axios from 'axios'

const loginUser = (user) => async(dispatch) => {
    dispatch({type: USER_LOGIN_DISPATCH, loading: true})

    try {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:8800/api/user/login',user, header)

        localStorage.setItem('userLogin', JSON.stringify(data))

        dispatch({type: USER_LOGIN_SUCCESS, payload: data, success: true, loading: false})

    } catch(e) {
        dispatch({type: USER_LOGIN_FAIL, loading: false, success: false})
        throw new error(e)

    }
}

const registerUser = (user) => async(dispatch) => {
    dispatch({type: USER_CREATE_DISPATCH, loading: true})

    try {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:8800/api/user/register',user, header)

        dispatch({type: USER_CREATE_SUCCESS, payload: data, success: true, loading: false})
        dispatch({type: USER_LOGIN_SUCCESS, payload: data, success: true, loading: false})

    } catch(e) {
        dispatch({type: USER_CREATE_FAIL, loading: false, success: false})
        throw new error(e)

    }
}

export {loginUser, registerUser}