import axios from "axios"
import { DELETE_MESSAGE_DISPATCH, DELETE_MESSAGE_FAIL, DELETE_MESSAGE_SUCCESS, GET_MESSAGE_DISPATCH, GET_MESSAGE_FAIL, GET_MESSAGE_SUCCESS, SAVE_MESSAGE_DISPATCH, SAVE_MESSAGE_FAIL, SAVE_MESSAGE_SUCCESS } from "../constants/messageConstants"

const saveMessages = (msgs) => async(dispatch, getState) => {
    dispatch({type: SAVE_MESSAGE_DISPATCH, loading: true})

    try{

        const token = getState().userLogin.userData.token

        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const {data} = await axios.post('http://localhost:8800/api/message',msgs, header)

        dispatch({type: SAVE_MESSAGE_SUCCESS, payload: data, loading: false, success: true})
        dispatch({type: GET_MESSAGE_SUCCESS, payload: data, loading: false, success: true})

    } catch(e) {
        dispatch({type: SAVE_MESSAGE_FAIL, loading: false, success: false})

        console.log(e)
    }

}

const getMessages = () => async(dispatch, getState) => {
    dispatch({type: GET_MESSAGE_DISPATCH, loading: true})

    try{

        const token = getState().userLogin.userData.token

        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const {data} = await axios.get('http://localhost:8800/api/message',header)

        dispatch({type: GET_MESSAGE_SUCCESS, payload: data, loading: false, success: true})

    } catch(e) {
        dispatch({type: GET_MESSAGE_FAIL, loading: false, success: false})
        console.log(e)
    }

}

const deleteMessages = () => async(dispatch, getState) => {
    dispatch({type: DELETE_MESSAGE_DISPATCH, loading: true})

    try{
        const token = getState().userLogin.userData.token

        const header = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const {data} = await axios.delete('http://localhost:8800/api/message',header)

        dispatch({type: DELETE_MESSAGE_SUCCESS, payload: data, loading: false, success: true})
    } catch(e) {
        dispatch({type: DELETE_MESSAGE_FAIL, loading: false, success: false})
        console.log(e)
    }
}

export {saveMessages, getMessages, deleteMessages}