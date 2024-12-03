import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate()
    function handleClick(path){
        navigate(path)
    }

    return(
        <div style={{display:"flex",justifyContent:"space-evenly",padding:"20px",backgroundColor:"darkred"}}>
            <button onClick={()=>handleClick("/")}>MoviesList</button>
            <button onClick={()=>handleClick("/add")}>Add Movies</button>
        </div>
    )
}