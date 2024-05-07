import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import Footer from './layout/Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
      <Footer/>
    </>
  )
}

export default App
