import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from "./Signup"
import Login from './Login'
import Timer from './Timer'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/timerapp" element={<Timer/>}/>
            
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes