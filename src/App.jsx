import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './PAGES/LandingPage'
import FormPage from './PAGES/FormPage'

function App() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/form" element={<FormPage/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}

export default App
