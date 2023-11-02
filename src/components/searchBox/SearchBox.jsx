import React from 'react'
import { useState } from 'react'

export default function SearchBox() {
   const [searchVal,setSearchVal] = useState('')
  return (
    <div className="relative mt-10">
  <input
    className="flex text-black justify-center items-center w-full pr-10 pl-5 py-2 border rounded-full"
    type="text"
    placeholder="Enter text"
    value={searchVal}
    onChange={(e)=>setSearchVal(e.target.value)}
  />
  <button className="absolute top-0 bottom-0 h-9 px-3 right-1 text-[13px] font-normal m-auto  bg-blue-500 text-white rounded-full flex items-center justify-center">
    <img className='w-5 h-5 mr-1' src='./image/search.png'/>
    Search
  </button>
</div>
  )
}
