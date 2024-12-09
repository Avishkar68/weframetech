import React from 'react'
import { CiHeart } from "react-icons/ci";
const Card = () => {
  return (
    <div className='w-[330px] h-[438px]  '>
        <div className='h-[362px] p-[10px] w-full flex flex-col items-center justify-between bg-[#F9F7F5]'>
            <div className='w-full flex items-center justify-between'>
                <CiHeart className='text-[32px]'/>
                <p className=' uppercase text-[#111928] font-[Geist] text-[10px] leading-[15px] align-center bg-[#FFFFFF] py-[0.5px] px-[2.5px] rounded-[4px]' >Art de la table</p>
            </div>
            <img src='/productside.jpeg' className='w-[224px] h-[224px] mix-blend-darken'/>
            <div className=''>
                
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Card