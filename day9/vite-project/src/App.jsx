import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Atomic } from './AtomicState'
import { MultipleCounters } from './components/counts'
import { Form } from './components/userForm'

function App() {
  
  console.log(Atomic);
  let [count,update] = Atomic()
  

  return (
    <>
      <h1>Test</h1>
      <button onClick={update}>{count}</button>
      <MultipleCounters />
      <Form/>
    </>
  )
}

export default App
