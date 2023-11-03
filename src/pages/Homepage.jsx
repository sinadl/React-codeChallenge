import React from 'react'
import SearchBox from '../components/searchBox/SearchBox'

export default function Homepage() {
  return (
    <div className='main-sec'>
        <h1 className=' text-[48px] font-bold capitalize leading-none'>Website Name</h1>
        <p className='text-[32px] font-light capitalize'>Your Gateway to Movie Magic!</p>
        <SearchBox />
    </div>
  )
}
