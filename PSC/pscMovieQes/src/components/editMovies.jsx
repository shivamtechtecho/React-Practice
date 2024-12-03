import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Navbar } from "./navbar";

export const EditMovie = ()=>{

    const [movie, setMovie] = useState({title:"",description:"",year:""})

    let {id} = useParams();

    async function getMovie() {
       let res = await  axios.get(`https://psc-session-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`)
       setMovie(res.data)
    }

    function handleInput(e){
        const {name,value} = e.target
        setMovie({...movie,[name]:value})
    }

    async function handleUpdate() {
        await axios.put(`https://psc-session-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,movie)
    }

    useEffect(()=>{
        getMovie()
    },[])

    return(
        <div>
            <Navbar/>
            <h1>Edit Movie</h1>
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
            <button onClick={handleUpdate}>Add Movie</button>
        </div>
    )
}

// we should get the id here ---> we make get request ---> input boxes ---> button update ---> repost {updated data};