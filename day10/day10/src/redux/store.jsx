import {legacy_createStore,combineReducers} from 'redux'
import { CounterReducer } from './reducer'
import { AuthReducer } from './authReducer'

let rootReducer = combineReducers({
    CounterReducer,
    AuthReducer 
})

export const store = legacy_createStore(rootReducer)

