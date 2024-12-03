import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const MovieList = ()=>{

    const [movies,setMovies] = useState([])

    async function getMovies() {
        let res = await axios.get("https://psc-session-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json")
        // console.log("these are the fetched movies",res.data); res.data mtlb obj of obj

        let arr=[];
        for(let key in res.data){
            arr.push({id:key,...res.data[key]})//key = key - id h key yaha => ...res.data[key] = value
        }
        setMovies([...arr])
    }

    async function handleDelete(id){
        await axios.delete(`https://psc-session-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
        getMovies()
    }

    useEffect(()=>{
        getMovies()
    },[])


    let navigate = useNavigate()

    function handleEdit(path){
        navigate(path)
    }

    return(
        <div>
            <Navbar/>
            <h1>Movies List</h1>
            <div>
                {
                    movies.map((ele)=>{
                        return(
                            <div key={ele.id}>
                            <h1>{ele.title}</h1>
                            <p>{ele.description}</p>
                            <h3>{ele.year}</h3>
                            <button onClick={()=>handleEdit(`/edit/${ele.id}`)}>Edit ✍</button>
                            <button onClick={()=>handleDelete(ele.id)}>Delete 🗑️</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


// Fetch ---> obj of obj ---> array of obj ---> store in state ---> mapping it to UI