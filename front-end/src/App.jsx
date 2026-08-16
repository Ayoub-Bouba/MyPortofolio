import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'


function App() {
  

  return (
    <div>
        <Header/>
        <Home/>
    </div>
  )

}
  

export default App
