import React, { useState } from "react";
import axios from 'axios'
import { Navbar } from "./navbar";

export const AddMovie = ()=>{

    const [movie, setMovie] = useState({title:"",description:"",year:""})

    function handleInput(e){
        const {name,value} = e.target
        setMovie({...movie,[name]:value})
    }

    async function handleAdd(){
        await axios.post("https://psc-session-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",movie)
    }

    return(
        <div>
            <Navbar/>
            <h1>Add Movie</h1>
            <input
            type="text" 
            name="title" 
            placeholder="Enter the movie name" 
            value={movie.title}
            onChange={handleInput}/>
            <input 
            type="text" 
            name="description" 
            placeholder="Enter the Description" 
            value={movie.description}
            onChange={handleInput}/>
            <input 
            type="text" 
            name="year" 
            placeholder="Enter the Release Year" 
            value={movie.year}
            onChange={handleInput}/>
            <button onClick={handleAdd}>Add Movie</button>
        </div> 
    )
}