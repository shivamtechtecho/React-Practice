import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Test } from './components/test'
import { Counter } from './components/counter'
import { WidthDisplay } from './components/width'
import { IntroRef } from './components/introRef'
import { Recommendation } from './components/recommendation'

function App() {
  // const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  let [inWidth,setInWidth] =  useState(window.innerWidth);


  useEffect(()=>{
    console.log("triggered")
  },[flag])

  return (
    <>
        <button onClick={()=>setFlag(!flag)}>{flag?"true":"false"}</button>
        <div>
          
          {
            flag
            ?
            <Recommendation/>
            :
            <Test inWidth={inWidth}/>
          }
          
        </div>
    </>
  )
}

export default App
