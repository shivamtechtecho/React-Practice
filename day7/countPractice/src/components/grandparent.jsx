import { useState,useEffect,useRef,useContext } from "react"
import { Parent } from "./parent"
import { CounterContext } from "../context/countContext"

export const Grandparent = ()=>{

    const {count,handleSetCount} = useContext(CounterContext)

    return(
        <div>
        <div style={{padding:"20px",border:"1px solid blue"}}>
            <h1>Grandparent</h1>
            <button onClick={handleSetCount}>{count}</button>
            
        </div>
        <Parent/>
        </div>
    )
}