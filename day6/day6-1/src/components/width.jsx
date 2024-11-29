import { useEffect,useState } from "react";

export const WidthDisplay=({inWidth,setInWidth})=>{

    useEffect(()=>{
        function updateWidth(){
        setInWidth(window.innerWidth)
        }
        window.addEventListener("resize",updateWidth)

        return()=>{
            console.log("removed the event listner")
            window.removeEventListener("resize", updateWidth)
        }
    },[])

    return(
        <h1>ViewWidth : {inWidth}</h1>
    )
}