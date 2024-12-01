// CPC => Create context => Providing to child => Consuming
import { useState } from "react";
import {  createContext } from "react";

// Creating-Providing-Consuming


export const ThemeContext = createContext()
// .provider is used to enable global state management


export const ThemeProvider = ({children})=>{

    let [login, setLogin] = useState(false)
    let [theme, setTheme] = useState(true)

    console.log("GrandParent rendered!");
    

    function handleLogIn(){
        setLogin(!login)
        
    }
    function handleTheme(){
        setTheme(!theme)
    }

    console.log(children);
    return(
        <ThemeContext.Provider value={{theme, handleTheme,login,handleLogIn}}>
            {children}
        </ThemeContext.Provider>
    )
}