import { useState } from 'react'
import './App.css'
import Home from './layout/Pages/Home'
import Culinary from './layout/Pages/Culinary'
import Recipes from './layout/Pages/Recipes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/culinary' element={<Culinary/>} />
        <Route path='/recipes' element={<Recipes/>} />
      </Routes>
    </Router>
  )
}

export default App
