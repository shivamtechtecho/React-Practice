import { useReducer, useState } from "react"

function FormReducer(state,{type,payload}){
    switch(type){
        case "Change Input":
            return{
                ...state,
                [payload.name]:payload.value
            }
        case "Add User":
            return{
                ...state,
                // storeUser : [...state.storeUser, state] //ye sidha tarika hai
                storeUser : [...state.storeUser, payload]
            }
        default:
            return state
    }
}

export const Form = ()=>{

    let initialState = {
        name : "",
        email : "",
        password : "",
        phone : "",
        storeUser : []
    }

    let [state,dispatch] = useReducer(FormReducer,initialState)

    // let [input, setInput] = useState({
    //     name:"",
    //     email:"",
    //     password:"",
    //     phone:""
    // })

    function handleChange(e){
        // let {name,value} = e.target
        // setInput({...input,[name]:value})
        dispatch({
            type:"Change Input",
            payload:{
                name: e.target.name,
                value:e.target.value
            }
        })
    }

    function handleForm(e){
        e.preventDefault()
        console.log(state);
        dispatch({
            type : "Add User",
            payload : state,

        })
        console.log(state);
        
        // setInput({name:"", email:"", password:"",phone:""})
    }

    return(
        <div>
            <form onSubmit={handleForm}>
                <h2>Name: </h2>
                <input 
                    type="text" 
                    placeholder="username"
                    name="name"
                    value={state.name}
                    onChange={handleChange}/>
                <h2>Email: </h2>
                <input 
                    type="email"
                    placeholder="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}/>
                <h2>Password: </h2>
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}/>
                <h2>Phone: </h2>
                <input 
                    type="number"
                    placeholder="phone"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}/>
                <input type="submit"/>
            </form>
            <div>
                {
                    state.storeUser.map((ele)=>{
                        return(
                            <div>
                                <h1>Name: {ele.name}</h1>
                                <h1>Email: {ele.email}</h1>
                                <h1>Password: {ele.password}</h1>
                                <h1>Phone: {ele.phone}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}