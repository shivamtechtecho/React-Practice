import { Navbar } from "./navbar"
import "../styles/home.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
export const Home = ()=>{

    let Navigate = useNavigate()

    let {products} = useContext(AuthContext)

    function handleGridClick(id){
        let productQuery = `/product/${id}`
        Navigate(productQuery)
    }

    return(
        <div>
            <Navbar/>
            <h1>Home</h1>
            <div className="prod-container">
                {
                    products.map((ele)=>{
                        return(
                            <div onClick={()=>handleGridClick(ele.id)} key={ele.id}>
                                <img src={ele.image}/>
                                <h2>{ele.title}</h2>
                                <h3>{ele.price}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


// start accesing endpoints via :nameofquery

// updating this query via `${dynamic}` & useNavigate

// using that query via useParams