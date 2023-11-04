import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Homepage from '../../pages/Homepage'
import MovieItem from '../movieItem/MovieItem'
import SerieList from '../serieList/SerieList'
import styles from './MovieList.module.css'

export default function MovieList() {
  return (
    <>
        <Homepage/>
        <div className={`${styles.movie_list}`}>
            <div className={`${styles.ads_container} right-0 hidden sm:block`}>
                <img className='' src="./../image/ads1.png" alt="ads" />
            </div>
            <div className={`${styles.movieList_inner} flex flex-col items-center w-full`}>
                <div className='flex flex-wrap space-x-5 w-full justify-center mt-3'>
                    <NavLink to={'movies'} className=' sm:w-2/6 bg-white text-gray-500 hover:text-blue-600 shadow-md  border-gray-400 font-bold py-2 px-4 rounded-full text-center'>Movies</NavLink>
                    <NavLink to={'series'} className=' sm:w-2/6 bg-white text-gray-500 hover:text-blue-600 shadow-md  border-gray-400 font-bold py-2 px-4 rounded-full text-center'>Series</NavLink>
                </div>
               
                <Outlet/>
            </div>
            <div className={`${styles.ads_container} left-0 hidden sm:block`}>
                <img className='' src="./../image/ads2.png" alt="ads" />
            </div>
            </div>
    </>

  )
}
