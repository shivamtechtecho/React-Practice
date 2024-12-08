import { act, useReducer, useState } from "react"

    function reducerFunction(state, {type,id}){
        // action => {type:"inc/dec,id:1"}
        // action => reprentation of change that we have to do with a state

        switch(type){
            case "inc":
                return{
                    ...state,
                    [id] : state[id]+1
                }
            case "dec":
                return{
                    ...state,
                    [id] : state[id]-1
                }  
                
            default:
                return state
        }
        
    }


// in reducer function the return statement is supposed to return state(be it the original one or updated) 

// {
// countA:0,
// countB:1     
// countC:2
// countB:0
// }
//    |
//    | what spread does--------
//    |
//    |
// {
// countA:0,
// countB:0,
// countC:2
// }

// reducer function(state,action)


export const MultipleCounters = ()=>{

    // let [countA, setCountA] = useState(0)
    // let [countB, setCountB] = useState(1)
    // let [countC, setCountC] = useState(2)

    let initialState = {
        countA:0,
        countB:1,
        countC:2
    }

    let [state, dispatch] = useReducer(reducerFunction,initialState)

    return(
        <div>
            <button onClick={()=>dispatch({type:"inc",id:"countA"})}>Count A:{state.countA}</button>
            <button onClick={()=>dispatch({type:"dec",id:"countB"})}>Count B: {state.countB}</button>
            <button onClick={()=>dispatch({type:"inc",id:"countC"})}>Count C: {state.countC}</button>
        </div>
    )
}


// what if we just had one place to update multiple states.
// separate state logic from component logic.
// repetative code.
// decreasing the code readability.


// useReducer => stateManagement

// syntax

// let [state, updaterFunction(dispatch)] = useReducer(reducerFn, initialState)