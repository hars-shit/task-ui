import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Forms/Login/Login.jsx'
import Home from './pages/Home'
import Register from './Forms/Register/Register'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/home' element={<Home />}/>
   </Routes>
   
   </>
  )
}

export default App