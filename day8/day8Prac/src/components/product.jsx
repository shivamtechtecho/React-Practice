import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navbar } from "./navbar"
import { useParams } from "react-router-dom"
export const Product = ()=>{

    let {products} = useContext(AuthContext)

    let {id} = useParams()

    let paramData = products.filter((ele)=>ele.id==id)
    console.log(paramData)
    return(
        <div>
            <Navbar/>
            <h1>Product</h1>
            <div>
                {
                    paramData.length==0
                    ?
                    <h2>No Data Present</h2>
                    :
                    <div style={{width:"50%"}}>
                        <img style={{width:"100%"}} src={paramData[0].image}/>
                        <h1>{paramData[0].title}</h1>
                        <p>{paramData[0].description}</p>
                        <h3>Price: {paramData[0].parice}</h3>
                    </div>
                }
            </div>
        </div>
    )
}


// start accesing endpoints via :nameofquery

// updating this query via `${dynamic}` & useNavigate

// using that query via useParams