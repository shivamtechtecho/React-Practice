import { useState,useContext } from "react";
import { ChildOne } from "./childOne"
import { ChildTwo } from "./childTwo"
import { ThemeContext } from "../context/themeContex"

export const Parent = ()=>{

    let [flag, setFlag] = useState(false)

    console.log("Parent rendered!");

    const {theme,handleTheme,login,handleLogIn} = useContext(ThemeContext)

    return(
        <div>
        <div style={{padding:"10px",border:"1px solid red",backgroundColor:theme?"midnightblue":"aqua",
            color:theme?"white":"midnightblue"}}>
        <h1>Parent</h1>
        <button onClick={()=>setFlag(!flag)} style={{backgroundColor:flag?"tomato":"crimson"}}>
            Parent Specific
        </button>
        <button onClick={handleTheme}>Toggle Theme</button>
        </div>
        <ChildOne />
        <ChildTwo />
        </div>
    )
}