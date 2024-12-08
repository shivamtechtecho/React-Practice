import { useState } from "react";

export const Atomic = ()=>{
    
    let [count,setCount] = useState(0)

    function updateSetCount(){
        setCount((prev)=>prev+1)
    }

    return [count, updateSetCount]
}