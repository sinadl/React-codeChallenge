import React from 'react'
import { useMovieContext } from '../../context/MovieContext'
import styles from './MovieItem.module.css'

import loading from '../../assets/loading.gif'
import heart from '../../assets/heart.png'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function MovieItem() {
    const {state,dispatch} = useMovieContext();
    const {status,movies} = state;

  return (
    <div className='flex w-full h-full justify-center space-x-1 flex-wrap py-5'>
        {status==='loading' && <div className=''><img src={loading}/></div>}
        {(status==='active' && movies.length===0) && <div className=' border-2 mt-10 rounded-lg border-blue-500 p-3'>There is no movie to display here!!!</div>}
        {(status==='ready' && movies.length===0) && <div className=' border-2 mt-10 rounded-lg border-blue-500 p-3'>There is no movie to display here!!!</div>}
        {status==='error' && <div className=' border-blue-500 p-3'>something went wrong pls try again later</div>}

        {movies.map((movie)=><Movie key={movie.id} movie={movie} />)}
    </div>
    
  )
}


function Movie({movie}){
return(
    <Link
    to={`${movie.title.replace(/[\s:]/g, "")}/${movie.id}`}
    className='flex w-2/5 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 relative shadow-2xl flex-col rounded-md overflow-hidden h-90 lg:h-90 xl:h-80 my-2 border-[1px] border-gray-300'>
        <img className=' rounded-tr-md rounded-tl-md w-full h-2/3 object-cover' src={movie.poster} alt={movie.title} />
        <span className='absolute top-2 left-0 bg-blue-500 text-white font-bold px-2 py-1 rounded-tr-md rounded-br-md'>HD</span>
        <span className='absolute top-[8px] right-[-18px] rotate-45 bg-black w-20 flex justify-center items-center  text-white font-bold px-2 py-1'><img className='w-4 -rotate-45' src={heart} alt="like" /></span>
        <div className='flex flex-col px-2 h-1/3 justify-around'>
            <p className='mt-2 text-blue-500 text-sm font-semibold'>{movie.title}</p>
            <div className='flex justify-between items-center text-[13px] mt-2'>
                <span>year: <strong className='font-semibold'>{movie.year}</strong></span>
                <span>IMDB: <strong className='font-semibold'>{movie.imdb_rating}</strong></span>
            </div>
            <span className=' mt-auto rounded-md text-[9px] py-[2px] px-3 font-medium bg-blue-500 ml-auto mt-2 text-white mb-1'>Movie</span>
        </div>
    </Link>
)
}