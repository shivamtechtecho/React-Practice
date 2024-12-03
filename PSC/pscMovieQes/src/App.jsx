import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AddMovie } from './components/addMovie'
import { MovieList } from './components/moviesList'
import { EditMovie } from './components/editMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/add' element={<AddMovie/>}/>
        <Route path='/edit/:id' element={<EditMovie/>}/>
      </Routes>
    </>
  )
}

export default App
