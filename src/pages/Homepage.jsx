import React from 'react'
import SearchBox from '../components/searchBox/SearchBox'

export default function Homepage() {
  const URL = window.location.href;
  return (
    <main className={`${URL.includes('movie')?'min-h-[22em]':'min-h-[40em]'}`}>
      <div className={`main-sec ${URL.includes('movie')?'my-[5em]':'mb-auto mt-[5em]'}`}>
        {URL.includes('movie')? 
          <>
            <h1 className=' text-[48px] font-bold capitalize leading-normal'>Wanna watch free movies & TV?</h1>
            <p className='text-[20px] w-2/3 font-light mx-auto capitalize'>You've come to the right place. We've got a bunch here and you can start watching right now</p>
          </>
          :
          <>
            <h1 className=' text-[48px] font-bold capitalize leading-none'>Website Name</h1>
            <p className='text-[32px] font-light capitalize'>Your Gateway to Movie Magic!</p>
          </>

        }

          <SearchBox />
      </div>
    </main>

  )
}
