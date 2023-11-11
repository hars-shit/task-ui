import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Forms/Login/Login.jsx'
import Home from './pages/Home'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/' element={<Login />}/>
   </Routes>
   
   </>
  )
}

export default App