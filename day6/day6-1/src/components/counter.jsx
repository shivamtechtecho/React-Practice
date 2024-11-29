import { useEffect,useState } from "react"
// import { useEffect, useState } from "react"

export const Counter=()=>{
    let [count,setCount]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
    },[])
    return(
        <h1>Counter: {count}</h1>
    )
}