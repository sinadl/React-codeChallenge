import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="bg-white text-black p-4 flex flex-col justify-center items-center absolute bottom-0 w-full ">
    <div className="flex flex-wrap container">
      <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
        {/* First Column */}
        <h2 className="text-lg font-semibold mb-2">Column 1</h2>
        <p>Content for the first column.</p>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
        {/* Second Column */}
        <h2 className="text-lg font-semibold mb-2">Column 2</h2>
        <p>Content for the second column.</p>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
        {/* Third Column */}
        <h2 className="text-lg font-semibold mb-2">Column 3</h2>
        <p>Content for the third column.</p>
      </div>
    </div>

    <div className="flex flex-wrap mt-4 container ">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-0">
        {/* Fourth Column (Second Row, First Column) */}
        <h2 className="text-lg font-semibold mb-2">Column 4</h2>
        <p>Content for the fourth column.</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        {/* Fifth Column (Second Row, Second Column) */}
        <h2 className="text-lg font-semibold mb-2">Column 5</h2>
        <p>Content for the fifth column.</p>
      </div>
    </div>
  </footer>
  )
}
