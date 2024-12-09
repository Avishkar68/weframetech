import React from 'react'
import Card from '../components/Card'
import Card2 from '../components/Card2'

const ProductList2 = () => {
  return (
    <div className=' flex items-center justify-center mt-[80px]'>
        <div className='flex flex-col h-[570px] w-[1470px] justify-around '>
          <div className='flex items-center justify-between w-full h-43px'>
            <p className='font-[Epilogue] font-[500] text-[35px] leading-[43px] text-[#393939]'>Ces produits pourraient vous intéresser</p>
            <p className='font-[Epilogue] text-[16px] leading-[20px] text-[#393939] border-b border-[#393939]'>Voir toute la collection</p>
          </div>
          <div className='flex gap-[20px] items-center'>
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
    </div>
  )
}

export default ProductList2