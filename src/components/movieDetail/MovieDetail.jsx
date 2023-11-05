import React, { useEffect } from 'react'
import styles from './MovieDetail.module.css'

import ads1 from '../../assets/adsMovie1.png'
import ads from '../../assets/adsMovie.png'
import ads2 from '../../assets/adsMovie2.png'
import playLogo from '../../assets/play.png'
import loading from '../../assets/loading.gif'
import SearchBox from '../searchBox/SearchBox'
import { Link, useParams } from 'react-router-dom'
import { useMovieContext } from '../../context/MovieContext'

const BASE_URL = 'https://moviesapi.ir/api/v1/movies/'
export default function MovieDetail() {
    const {state,dispatch} = useMovieContext()
    const {status,selectedMovie} = state;
    const {id} = useParams()
    useEffect(()=>{
        async function getMovie(id){
            try {
                dispatch({type:'LOADING_ON'});
                const res = await fetch(`${BASE_URL}${id}`)
                const data = await res.json();
                dispatch({type:'MOIVIE_SELECTED',payLoad:data})
                dispatch({type:'DATA_RECIEVED'})
                console.log(data)
            } catch (error) {
                console.error('something went wrong while fetching data!!')
                dispatch({type:'DATA_ERROR',payLoad:'pls try after 5 min'})
            }
        }
        getMovie(id);
    },[id])
  return (
    <>
        <div className={`${styles.movie_list} mb-8`}>
            <div className={`${styles.ads_container} right-0 hidden sm:block`}>
                <img className='' src={ads1} alt="ads" />
            </div>
            <div className={`${styles.movieList_inner} flex flex-col items-center w-full `}>
                <SearchBox classMovie={' w-[90%]'}/>
                <ul className='flex my-3 mr-auto'>
                    <li className='mx-2'>
                        <Link className=' hover:text-blue-500 hover:underline' to={'/'}>Home</Link>
                    </li>
                    /
                    <li className='mx-2'>
                        <Link className='hover:text-blue-500 hover:underline' to={'/movie'}>Movies</Link>
                    </li>
                    /
                    <li className='mx-2'>
                        <a>88888</a>
                    </li>
                </ul>
                <div className=' min-h-[27em] border-2 border-gray-500 shadow-2xl w-[98%] bg-black relative'>
                    <div className=' absolute bottom-0 right-0 w-full h-10 bg-white'></div>
                </div>
            </div>
            <div className={`${styles.ads_container} left-0 hidden sm:block`}>
                <img className='' src={ads} alt="ads" />
            </div>
        </div>
        <div className='flex justify-center text-center flex-col items-center'>
            <p>If current server doesn’t work please try other servers below</p>
            <div className='flex space-x-3 mt-4'>
                <a href='#' className='flex items-center space-x-4 bg-blue-100 p-2 rounded-md'>
                    <img className='w-3' src={playLogo} alt="" />
                    <div className='flex flex-col'>
                        <span className=' text-xs'>Server</span>
                        <strong className='text-sm font-semibold'>Upcload</strong>
                    </div>
                </a>
                <a href='#' className='flex items-center space-x-4 bg-blue-100 p-2 rounded-md'>
                    <img className='w-3' src={playLogo} alt="" />
                    <div className='flex flex-col'>
                        <span className=' text-xs'>Server</span>
                        <strong className='text-sm font-semibold'>Vidcload</strong>
                    </div>
                </a>
            </div>
            <img className='mt-8 mb-2 w-[70em] max-w-[85%]' src={ads2} alt="ads" />
            {status==='loading' && <div className=''><img src={loading}/></div>}
            {status === 'ready' &&
            <div className='w-[70em] max-w-[85%]'>
                <div className='w-full shadow-card3xl min-h-[6em] flex flex-col sm:flex-row  p-3 mb-5 rounded-xl border-2 border-gray-100'>
                    <div className='flex w-4/4 sm:w-1/4 md:w-1/5 lg:w-1/5 relative flex-col rounded-md overflow-hidden h-[20em] my-2 border-[1px] border-gray-300'>
                        <img className=' rounded-tr-md rounded-tl-md w-full h-4/5 object-cover' src={selectedMovie.poster} alt={selectedMovie.title} />
                        <span className='absolute top-2 left-0 bg-blue-500 text-white font-bold px-2 py-1 rounded-tr-md rounded-br-md'>HD</span>
                        <div className='flex flex-col px-2 h-1/5 justify-start'>
                            <p className=' text-blue-500 text-sm font-semibold text-start'>{selectedMovie.title}</p>
                            <div className='flex justify-between items-center text-[13px] mt-2'>
                                <span>year: <strong className='font-semibold'>{selectedMovie.year}</strong></span>
                                <span>IMDB: <strong className='font-semibold'>{selectedMovie.imdb_rating}</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-4/4 sm:w-3/4 md:w-4/5 lg:w-4/5 relative flex-col py-2 sm:text-start pl-2 items-start'>
                        <p className=' text-start leading-7'>{selectedMovie.plot}</p>
                        <div className='flex space-x-2 my-2'> 
                            <p className=' py-1 px-2 text-xs bg-blue-100 border border-blue-500 text-blue-500 rounded-[3px]'>Meta <span className='text-sm font-semibold'> {selectedMovie.metascore}</span></p>
                            <p className=' py-1 px-2 text-xs bg-blue-100 border border-blue-500 text-blue-500 rounded-[3px]'>Rated <span className='text-sm font-semibold'> {selectedMovie.rated}</span></p>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-2 mt-2 text-start">
                            <div className=" p-2 text-xs"><strong>Duration:</strong>  {selectedMovie.runtime}</div>
                            <div className=" p-2 text-xs"><strong>Released:</strong>  {selectedMovie.released}</div>
                            <div className=" p-2 text-xs"><strong>Country:</strong>  {selectedMovie.country}</div>
                            <div className=" p-2 text-xs"><strong>Genre:</strong>  {selectedMovie.genres}</div>
                            <div className=" p-2 text-xs"><strong>Production:</strong>  {selectedMovie.director}</div>
                            <div className=" p-2 text-xs"><strong>Casts:</strong>  {selectedMovie.actors}</div>
                        </div>
                    </div>
                </div>
            </div>
            }
                <div className='mt-4 w-[70em] max-w-[85%]'>
                    <p>Share with your friends</p>
                    <ul className='flex space-x-5 sm:space-x-10 justify-center mb-8 mt-5'>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/FBRounded.png" alt="facebook" /></a>
                        </li>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/WA.png" alt="whatsapp" /></a>
                        </li>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/instaRounded.png" alt="instagram" /></a>
                        </li>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/line.png" alt="line" /></a>
                        </li>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/twitter.png" alt="twitter" /></a>
                        </li>
                        <li className='flex flex-col justify-center items-center space-y-2'>
                            <a href="#"><img className='w-5 object-contain sm:w-[45px] sm:h-[45px]' src="../../../src/assets/dl.png" alt="download" /></a>
                        </li>
                    </ul>
                </div>
        </div>
    </>


  )
}
