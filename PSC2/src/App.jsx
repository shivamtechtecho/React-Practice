import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ButtonGroup,Stack,Box,Wrap,WrapItem } from '@chakra-ui/react'
import { HomePage } from './comonents/HomePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { UserDetails } from './comonents/UserDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/User/:id" element={<UserDetails/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
