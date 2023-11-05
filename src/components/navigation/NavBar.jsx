import React from 'react'
import styles from './NavBar.module.css'

import logo from '../../assets/logo.png'
import profile from '../../assets/profile.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
  const [navTog,setNavTog] = useState(false)
  return (



<nav className=" border-gray-200 bg-[#272626] navbar">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to={'/'} href="https://flowbite.com/" className="flex items-center">
      <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
        <h1 className="text-white font-semibold text-xs">Website Name</h1>
    </NavLink>
    <button onClick={()=>{setNavTog(!navTog)}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={` ${navTog?'':'hidden'} absolute top-[77px] z-10 bg-[#272626] left-0 right-0 md:relative md:top-0 w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:justify-center md:items-center  md:flex-row md:space-x-10 md:mt-0">
        <li>
          <NavLink to={'/'}  className="block py-1  text-white rounded " aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to={'movie'} className="block py-1  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</NavLink>
        </li>
        <li>
          <a href="#" className="block py-1  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">TV Shows</a>
        </li>
        <li>
          <a href="#" className="block py-1  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Top IMDB</a>
        </li>
        <li className={`text-white bg-blue-600 px-5 py-2 rounded-full text-sm ${styles.noHover}`}>
        <a className='flex flex-row' href="#">
        <img className='w-5 h-5 mr-1' src={profile}/>
          Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  //   <div className="bg-[#272626] p-4">
  //   <div className="container mx-auto flex justify-between items-center">
  //     <NavLink  className="flex items-center">

  //     </NavLink>

  //     <ul className={`flex space-x-10 items-center ${styles.navbar}`}>
  //       <li className="text-white active">
  //         <a href="#">Home</a>
  //       </li>
  //       <li className="text-white">
  //         <a href="#">Movies</a>
  //       </li>
  //       <li className="text-white">
  //         <a href="#">TV Shows</a>
  //       </li>
  //       <li className="text-white">
  //         <a href="#">Tops IMDB</a>
  //       </li>
  //       <li className={`text-white bg-blue-600 px-5 py-2 rounded-full text-sm ${styles.noHover}`}>
  //         <a className='flex flex-row' href="#">
  //         <img className='w-5 h-5 mr-1' src={profile}/>
  //           Login</a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  )
}
