import { useState } from 'react'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import Footer from './components/footer/Footer'

import NavBar from './components/navigation/NavBar'
import { MovieProvider } from './context/MovieContext'
import Homepage from './pages/Homepage'

function App() {


  return (
    <MovieProvider>
      <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </MovieProvider>

  )
}

export default App
