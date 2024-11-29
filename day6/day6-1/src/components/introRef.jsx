import { useRef,useEffect } from "react"

export let IntroRef = ()=>{
    let inputReferance = useRef(null);
    // console.log(ref)

    function handleClick(){
        console.log(inputReferance.current.value)
        
    }
    useEffect(()=>{
        inputReferance.current.focus()
    },[])
    return(
        <div>
            <input ref={inputReferance} placeholder="name"/>
            <button onClick={handleClick}>Press</button>
        </div>
    )
}