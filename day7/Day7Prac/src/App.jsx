import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grandparent } from './components/grandparent'
import { ThemeProvider } from './context/themeContex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <Grandparent/>
    </ThemeProvider>
    </>
  )
}

export default App



// data => child => grandchild

// <Component/> => function call

// <component></component> => its also a function call we can also call the component like this

// <component>
//    <AnotherComponent/> 
// </component>

// Children : AnotherComponent

// function Component({Children}){

  // children
// }