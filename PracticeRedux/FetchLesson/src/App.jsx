import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './components/HomePage'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Details } from './components/details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Details/:id" element={<Details/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
