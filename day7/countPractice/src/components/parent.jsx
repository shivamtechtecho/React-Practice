import { useState,useEffect,useRef,useContext } from "react"
import { Child } from "./child"
import { CounterContext } from "../context/countContext"
export const Parent = ()=>{

    let {count,handleSetCount} = useContext(CounterContext)

    return(
        <div style={{padding:"20px",border:"1px solid darkred"}}>
        <h1>Parent</h1>
        <button onClick={handleSetCount}>{count}</button>
        <Child/>
        </div>
    )
}