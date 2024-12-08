import { INCREMENT,DECREMENT,RESET,AUTH } from "./actionTypes"

export const increment = ()=>{
    return{
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return{
        type:DECREMENT
    }
}

export const reset = ()=>{
    return{
        type:RESET
    }
}

export const auth = ()=>{
    return{
        type:AUTH
    }
}