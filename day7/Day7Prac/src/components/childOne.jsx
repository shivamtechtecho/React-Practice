import { useState ,useContext} from "react";
import { ThemeContext } from "../context/themeContex"

export const ChildOne = ()=>{

    const {theme,handleTheme,login,handleLogIn} = useContext(ThemeContext)


    console.log("ChildOne rendered!");

    let [flag, setFlag] = useState(false)

    return(
        <div style={{padding:"10px",border:"1px solid blue",backgroundColor:theme?"midnightblue":"aqua",
            color:theme?"white":"midnightblue"}}>
            <h1>ChildOne</h1>
            <button onClick={()=>setFlag(!flag)} style={{backgroundColor:flag?"red":"pink"}}>ChildOne Specific</button>
            <button onClick={handleTheme}>Toggle Theme</button>
        </div>
    )
}