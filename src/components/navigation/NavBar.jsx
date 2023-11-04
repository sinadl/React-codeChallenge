import React from 'react'
import styles from './NavBar.module.css'

import logo from './../../../public/image/logo.png'
import profile from './../../../public/image/profile.svg'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="bg-[#272626] p-4">
    <div className="container mx-auto flex justify-between items-center">
      <NavLink to={'/'} className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
        <h1 className="text-white font-semibold text-xs">Website Name</h1>
      </NavLink>

      <ul className={`flex space-x-10 items-center ${styles.navbar}`}>
        <li className="text-white active">
          <a href="#">Home</a>
        </li>
        <li className="text-white">
          <a href="#">Movies</a>
        </li>
        <li className="text-white">
          <a href="#">TV Shows</a>
        </li>
        <li className="text-white">
          <a href="#">Tops IMDB</a>
        </li>
        <li className={`text-white bg-blue-600 px-5 py-2 rounded-full text-sm ${styles.noHover}`}>
          <a className='flex flex-row' href="#">
          <img className='w-5 h-5 mr-1' src={profile}/>
            Login</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
