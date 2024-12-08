"use client"; 

import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'

const Header = () => {
  return (
    <div className=' h-[120px] md:h-[168px] border-b border-[#6B7280] flex flex-col justify-between  '>
        <Navbar />
        <Categories />
    </div>
  )
}

export default Header