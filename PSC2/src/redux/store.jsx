import { useReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";  
import {thunk} from "redux-thunk";  
 // Import your reducer here  

export const store = createStore(useReducer, applyMiddleware(thunk));  

// export default store;