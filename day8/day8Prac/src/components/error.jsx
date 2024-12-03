import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Error = ()=>{

    let navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },4000)
    },[])

    return(
        <h1>404: Page Not Found.</h1>
    )
}