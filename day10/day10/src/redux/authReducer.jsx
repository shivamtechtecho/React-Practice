import { AUTH } from "./actionTypes"

let initalState={
    auth:false
}

export const AuthReducer = (state=initalState,action)=>{
    
    switch(action.type){
        case AUTH :
            return{
                ...state,
                auth: !state.auth
            }
        default:
            return state
    }
}