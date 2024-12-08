"use client"; 

import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

const categories = [
    "MOBILIER",
    "NAPPAGE",
    "MATÉRIEL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "PODIUM - PISTE DE DANSE",
    "SON ET LUMIÈRE",
    "PACKS",
    "CONSOMMABLES"
  ]

const Categories = () => {
  return (
    <div className=' mx-[15px] md:mx-[25px]  h-[37.58px] w-fit flex gap-[38px] text-[13px] font-[500] leading-0 md:leading-[21px] font-[Inter]  text-[#6B7280] '>
          <div className='hidden md:flex text-[#0093D0] border-b-2 border-[#0093D0]'>ART DE LA TABLE</div>
        {categories.map((category , index)=>(
          <div className='hidden md:flex' key={index}>{category}</div>
        ))}
        <div className='md:hidden text-[16px] flex items-center gap-2 justify-center'>
          <p>Categories</p>
          <FaAnglesDown />
        </div>
    </div>
  )
}

export default Categories