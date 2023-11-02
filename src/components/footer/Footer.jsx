import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="bg-white text-black p-4 flex flex-col justify-center items-center absolute bottom-0 w-full ">
    <div className="flex flex-wrap container my-5 sm:justify-between">
      <div className="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 mb-4 sm:mb-0">
        <div className="flex items-center">
            <img src="./image/logo.png" alt="Logo" className="w-13 h-13 mr-2" />
            <h1 className="text-black font-semibold text-xs">Website Name</h1>
        </div>
      </div>

      <div className="w-full sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 mb-4 sm:mb-0 sm:pr-10">
        <p className=' text-[13px] leading-normal '>Lorem ipsum dolor sit amet consectetur.
             Volutpat quam tortor nunc at aliquet. Sed nulla maecenas adipiscing proin.
              In magna fames faucibus quis laoreet vitae eu mi. Egestas elit nunc iaculis elementum sed leo aliquet. Vel ac mattis cras cursus aliquam semper.</p>
      </div>

      <div className="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5">
        <p className=' text-[13px] leading-normal '>Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor nunc at aliquet. Sed nulla maecenas adipiscing proin. In magna fames as </p>
      </div>
    </div>

    <div className="flex flex-wrap mt-10 mb-6 container justify-between">
      <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 mb-4 sm:mb-0">
        <ul className={`flex sm:space-x-5 items-center text-[13px] ${styles.navbar}`}>
            <li className="text-black active border-r-2 pr-5">
            <a href="#">website@2023</a>
            </li>
            <li className="text-black border-r-2 pr-5">
            <a href="#">Term Of Services</a>
            </li>
            <li className="text-black border-r-2 pr-5">
            <a href="#">Sitemap</a>
            </li>
            <li className="text-black border-r-2 pr-5">
            <a href="#">Contact</a>
            </li>
            <li className="text-black">
            <a href="#">9anime</a>
            </li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
      <ul className={`flex sm:space-x-5 items-center text-[13px] justify-end mr-5`}>
            <li className="text-black space-x-5">
            <a href="#"><img src="./image/instagram.png" alt="instagram" /></a>
            </li>
            <li className="text-black space-x-5">
            <a href="#"><img src="./image/facebook.png" alt="facebook" /></a>
            </li>
            <li className="text-black space-x-5">
            <a href="#"><img src="./image/linkedin.png" alt="linkedin" /></a>
            </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
