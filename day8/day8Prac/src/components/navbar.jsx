import { Link, useNavigate } from "react-router-dom"
import "../styles/navbar.css"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const Navbar = ()=>{

    let {login,handleSetLogin} = useContext(AuthContext)

    let navigate=useNavigate()

    function handleClick(path){
        if(path!=="/"){
            if(login){
                navigate(path)
            }
            else{
                path="/"
                alert("login first")
                navigate("/login")
            }
        }
        else{
            navigate(path)
        }
    }
    return(
        <div className="navbar">
            {/* <Link to="/">Home</Link>
            <Link to="product">Product</Link>
            <Link to="/contact">Contact</Link> */}
            <button onClick={()=>handleClick("/")}>Home</button>
            <button onClick={()=>handleClick("/product")}>Product</button>
            <button onClick={()=>handleClick("/contact")}>Contact</button>
            <button onClick={handleSetLogin}>{login?"LogOut":"Login"}</button>
        </div>
    )
}