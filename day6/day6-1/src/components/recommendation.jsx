import { useRef, useState } from "react"

export const Recommendation=()=>{

    let [update, setUpdate] = useState(false)

    let hoverdDivs = useRef([])

    let DivArr = ["div1","div2","div3","div4","div5","div6"]

    function handleMouseHover(ele){
        console.log(ele)
    }

    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2em"}}>
            {
                DivArr.map((ele,i)=>{
                    return(
                        <div
                        onMouseEnter={()=>handleMouseHover(ele)} 
                        key={i} 
                        style={{border:"1px solid midnightblue",padding:"20px"}}>
                            <h1>{ele}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}