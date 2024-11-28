import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Container } from "./components/container";


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(undefined);
  let categories = ["electronics","jewelery","men's clothing","women's clothing"];
  // useEffect=>(()=>{},[])

  function handleChange(){
    setCategory(event.target.value)
  }

  function showData(category){
    let apiUrl = category ?
     `https://fakestoreapi.com/products/category/${category}` 
     :
    'https://fakestoreapi.com/products'
    fetch(apiUrl)
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
              setData(json)
            })

    
  }
  useEffect(()=>{
    showData(category)
    console.log("triggered")
  },[count,category])
  return (
    <>
      <Navbar />
      <div className="sidebar-container">
      <button onClick={()=>setCount(count+1)}>{count}</button>
        <Sidebar />
        <Container />
      </div>
      <select onChange={handleChange}>
        <option>Category</option>
        {
          categories.map((ele)=>{
            return(<option value={ele}>{ele}</option>)
          })
        }
      </select>

    </>
  );
}

export default App

// useEffect can be used to do side effect and we can call it as manager of lifecycle

// 1. this will triggered with every re-render
// let [flag, setFlag] = useState(false)
// useEffect(()=>{
  // console.log("triggered") with every change in state
// })

// 2. empty dependency arrays => maunts => renders
//  useEffect(()=>{
  // console.log("triggered")
// },[])

// 3. filed dependency arrays => maunts => renders
// let [flag, setFlag] = useState(false)
// let [num, setNum] = useState(false) 
//  useEffect(()=>{
  // console.log("triggered")
// },[flag,num]])