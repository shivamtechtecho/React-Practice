import { UserReducer } from "./reducer";
import { createStore,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'

export const store = createStore(UserReducer,applyMiddleware(thunk))