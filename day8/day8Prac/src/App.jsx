import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar'
import { Product } from './components/product'
import { Contact } from './components/contact'
import { Home } from './components/home'
import { Routes,Route } from 'react-router-dom'
import { Login } from './components/login'
import { Error } from './components/error'

function App() {
  const [count, setCount] = useState(0)

  let routeData=[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/product/:id",
    element:<Product/>
  },
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"*",
    element:<Error/>
  }
]

  return (
    <div>
      <Routes>
          {
            routeData.map((ele)=>{
              return(
                <Route path={ele.path} element={ele.element}/>
              )
            })
          }
      </Routes>
    </div>
  )
}

export default App



// routes => endpoint

// www.flipkart.com/products