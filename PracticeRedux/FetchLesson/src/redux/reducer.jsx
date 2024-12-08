import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./actions"

let initState = {
    users:[],
    loading:false,
    error:""
}

export const UserReducer = (state=initState,action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return{...state,loading:true,error:""}
        case FETCH_SUCCESS:
            return{...state,loading:false,users:action.payload,error:""}
        case FETCH_FAILURE:
            return{...state,loading:false,users:[],error:action.error}
        default:
            return state
    }

}