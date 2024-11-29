import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Test } from './components/test'
import { Counter } from './components/counter'

function App() {
  // const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)

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
            <Counter/>
            :
            <Test/>
          }
        </div>
    </>
  )
}

export default App
