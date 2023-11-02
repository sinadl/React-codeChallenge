import { useState } from 'react'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import Footer from './components/footer/Footer'

import NavBar from './components/navigation/NavBar'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
