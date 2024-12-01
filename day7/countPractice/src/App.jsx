import { useState } from 'react'
import './App.css'
import { Grandparent } from './components/grandparent'
// import { ThemeProvider } from '../../Day7Prac/src/context/themeContex'
import { CounterProvider } from './context/countContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CounterProvider>
        <Grandparent/>
      </CounterProvider>
      
    </>
  )
}

export default App
