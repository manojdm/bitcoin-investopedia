import { applyMiddleware, compose, configureStore, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers  from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const userLogin = { userData : localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : undefined , loading : false}

const initialState = {
    userLogin
}
const middleware = [thunk]

const store = createStore(reducers ,initialState, compose(composeWithDevTools(applyMiddleware(...middleware))))

export default store