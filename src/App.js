import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Login></Login>
      <Register></Register>
    </div>
  )
}

export default App
