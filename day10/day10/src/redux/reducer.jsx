import {INCREMENT,DECREMENT,RESET} from "./actionTypes"

let initalState = {
    count : 5,
    flag : false
}
export const CounterReducer = (state=initalState,{type})=>{
    switch(type){
        case INCREMENT :
            return{
                ...state,count:state.count+1
            }
        case DECREMENT :
            return{
                ...state,count:state.count-1
            }
        case RESET :
            return{
                ...state,count:0
            }
        default:
            return state
    }
}


// defalt parameters, rest parameters