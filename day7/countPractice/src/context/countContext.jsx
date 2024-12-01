import { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({children})=>{

    let [count, setCount] = useState(0)

    console.log("grandparent");
    

    function handleSetCount(){
        setCount((prev)=>prev+1)
        console.log(count)
    }
    console.log(children)
    return(
        <CounterContext.Provider value={{count,handleSetCount}}>
            {children}
        </CounterContext.Provider>
    )
}