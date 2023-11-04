import { useState } from 'react'
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import Footer from './components/footer/Footer'
import MovieList from './components/movieList/MovieList'

import NavBar from './components/navigation/NavBar'
import { MovieProvider } from './context/MovieContext'
import SerieList from './components/serieList/SerieList'
import Homepage from './pages/Homepage'
import MovieItem from './components/movieItem/MovieItem'

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
          <Route path='/movie' element={<MovieList/>}>
          <Route index element={<Navigate replace to={'movies'}/>}/>
            <Route path='series' element={<SerieList/>}/>
            <Route path='movies' element={<MovieItem/>}/>
          </Route>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </MovieProvider>

  )
}

export default App
