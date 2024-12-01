import { useContext, useState } from "react"
import { Parent } from "./parent"
import { ThemeContext } from "../context/themeContex"
// import { ThemeContext } from './context/themeContex'

export const Grandparent = ()=>{

    const {theme,handleTheme,login,handleLogIn} = useContext(ThemeContext)

    return(
        <div>
        <div style={{padding:"10px",border:"1px solid black",backgroundColor:theme?"midnightblue":"aqua",
            color:theme?"white":"midnightblue"
        }}>
        <h1>Grandparent</h1>
        <button onClick={handleLogIn}>{login ? "Log out" : "LogIn"}</button>
        <button onClick={handleTheme}>Theme</button>
        
        </div>
        <Parent />
        </div>
    )
}