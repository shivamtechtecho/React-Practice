import { useDispatch, useSelector } from "react-redux"
import { auth, decrement, increment, reset } from "../redux/actions"
import { CounterReducer } from "../redux/reducer"
import { AuthReducer } from "../redux/authReducer"

export const Counter = ()=>{

    // count // => we need to get something from redux => useSelector
    // methods to update this count => dispatch({type:INCREMENT}) => we need to send something to redux => useDispatch

    let count = useSelector((state)=>state.CounterReducer.count)

    let flag = useSelector((state)=>state.AuthReducer.auth)

    let dispatch = useDispatch()

    return(
        <>
            <button onClick={()=>dispatch(increment())}>inc</button>
            <h1>{count}</h1>
            <h1>{flag?"bangru":"sangru"}</h1>
            <button onClick={()=>dispatch(decrement())}>dec</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <button onClick={()=>dispatch(auth())}>auth</button>
        </>
    )
}