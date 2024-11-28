import { useState } from "react"

export let Sidebar=()=>{
    let [toggle, setToggle] = useState(false)
    function handleSidebar(){
        setToggle(!toggle)
    }
    return(
        <div className="sidebar">
            <button onClick={handleSidebar}>Toggle</button>
            <div>
                {
                    toggle ?
                    <div>
                        <p>Just testing sidebar out.</p>
                        <p>Just testing sidebar out.</p>
                        <p>Just testing sidebar out.</p>
                        <p>Just testing sidebar out.</p>
                    </div>:
                    <div></div>
                }
            </div>
        </div>
    )
}