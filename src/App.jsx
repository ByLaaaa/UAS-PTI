import { useState } from 'react'
import './App.css'
import Home from './layout/Pages/Home'
import Culinary from './layout/Pages/Culinary'
import Recipes from './layout/Pages/Recipes'
import DevS from './layout/Pages/AboutDev'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Resep from './layout/Component/recipes/ViewResep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/culinary' element={<Culinary/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/devS' element={<DevS/>} />
        <Route path='/recipes/:id' element={<Resep/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
