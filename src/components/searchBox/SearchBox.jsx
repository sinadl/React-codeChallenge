import { func } from 'prop-types'
import React from 'react'
import { useState } from 'react'
import { useMovieContext } from '../../context/MovieContext'
import searchIcon from '../../../public/image/search.png'
import { useNavigate } from 'react-router-dom'

const BASE_URL = 'https://moviesapi.ir/api/v1/movies?'
export default function SearchBox() {
   const [searchVal,setSearchVal] = useState('')
   const {state,dispatch} = useMovieContext()
   const navigate = useNavigate(); 
   const URL = window.location.href;

   async function getMovieHandler(e){
    e.preventDefault()
    dispatch({type:'UPDATE_MOVIES',payLoad:[]})
    try {
        if(!URL.includes('movie')) navigate('movie')
        
        dispatch({type:'LOADING_ON'})
        const res = await fetch(`${BASE_URL}q=${searchVal}`)
        const data = await res.json();
        dispatch({type:'DATA_RECIEVED'})
        dispatch({type:'UPDATE_MOVIES',payLoad:data.data})
    } catch (error) {
        console.error('something went wrong while fetching data!!')
        dispatch({type:'DATA_ERROR',payLoad:'pls try after 5 min'})
    }finally{
        setSearchVal('')
    }
   }
   console.log(state)
  return (
    <form className="relative mt-10">
  <input
    className="flex text-black justify-center items-center w-full pr-10 pl-5 py-2 border rounded-full"
    type="text"
    placeholder="Enter text"
    value={searchVal}
    onChange={(e)=>setSearchVal(e.target.value)}
  />
  <button className="absolute top-0 bottom-0 h-9 px-3 right-1 text-[13px] font-normal m-auto  bg-blue-500 text-white rounded-full flex items-center justify-center"
  onClick={(e)=>getMovieHandler(e)}
  >
    <img className='w-5 h-5 mr-1' src={searchIcon}/>
    Search
  </button>
</form>
  )
}
