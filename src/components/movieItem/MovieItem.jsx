import React from 'react'
import { useMovieContext } from '../../context/MovieContext'
import styles from './MovieItem.module.css'

import loading from '../../../public/image/loading.gif'
import { Link } from 'react-router-dom';

export default function MovieItem() {
    const {state,dispatch} = useMovieContext();
    const {status,movies} = state;
    console.log(status)
  return (
    <div className='flex w-full h-full justify-center space-x-1 flex-wrap py-5'>
        {status==='loading' && <div className=''><img src={loading}/></div>}
        {(status==='active' && movies.length===0) && <div className=' border-2 mt-10 rounded-lg border-blue-500 p-3'>There is no movie to display here!!!</div>}
        {status==='error' && <div className=' border-blue-500 p-3'>something went wrong pls try again later</div>}

        {movies.map((movie)=><Movie key={movie.id} movie={movie} />)}
    </div>
    
  )
}


function Movie({movie}){
return(
    <div className='flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 relative shadow-2xl flex-col rounded-md overflow-hidden h-80 my-2 border-[1px] border-gray-300'>
        <img className=' rounded-tr-md rounded-tl-md w-full h-2/3 object-cover' src={movie.poster} alt={movie.title} />
        <span className='absolute top-2 left-0 bg-blue-500 text-white font-bold px-2 py-1 rounded-tr-md rounded-br-md'>HD</span>
        <div className='flex flex-col px-2 h-1/3 justify-around'>
            <p className='mt-2 text-blue-500 text-sm font-semibold'>{movie.title}</p>
            <div className='flex justify-between items-center text-[13px] mt-2'>
                <span>year: <strong className='font-semibold'>{movie.year}</strong></span>
                <span>IMDB: <strong className='font-semibold'>{movie.imdb_rating}</strong></span>
            </div>
            <Link className=' rounded-md text-[9px] py-[2px] px-3 font-medium bg-blue-500 ml-auto mt-2 text-white mb-1' to={`${movie.id}`}>Movie</Link>
        </div>
    </div>
)
}