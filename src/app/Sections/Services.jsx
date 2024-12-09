import React from 'react'

const Services = () => {
  return (
    <div className=' flex justify-center  w-[98.9vw] h-[567px] mt-[80px] bg-gradient-to-b from-[rgba(238,65,151,0.04)] to-[rgba(255,255,255,0.04)]  bg-opacity-50'>
        <div className='w-[928px] h-[255px] mt-[66px] flex flex-col items-center justify-between'>
            <div className='w-[449px] h-[70px] flex flex-col items-center justify-center'>
                <p className='font-[Epilogue] font-[500] text-[35px] leading-[43px] align-center text-[#393939]'>On s’occupe de <span className='font-[Epilogue] font-[800]  text-[#5CD2DD]'>tout</span></p>
                <p className='font-[Geist] font-[400] text-[14px] leading-[17px align-center] text-[#9C9C9C]'>Office ipsum you must be muted. It meeting commitment busy pain.</p>
            </div>
            <div className='w-[928px] h-[139px] py-[10px] flex items-center justify-between'>
                <div className='w-fit h-[115px] flex flex-col items-center'>
                    <img src='/Groupe_25.png' className='mb-[12px]' />
                    <p className='text-[#393939] mb-[12px] font-[Epilogue] font-[500] text-[20px] leading-[22px]'>Livraison & Reprise</p>
                    <p className='text-[#9C9C9C] font-[Geist] font-[400] text-[14px] leading-[17px]'>Selon vos besoins</p>
                </div>
                <div className='absolute top-[2650px] left-[430px] rounded-lg w-[128px] border-[0.5px] border-[#9C9C9C]'></div>
                <div className='absolute top-[2650px] left-[650px] rounded-lg w-[128px] border-[0.5px] border-[#9C9C9C]'></div>
                <div className='absolute top-[2650px] left-[876px] rounded-lg w-[166px] border-[0.5px] border-[#9C9C9C]'></div>
                <div className='w-fit h-[115px] flex flex-col items-center'>
                    <img src='/dish.png' className='mb-[12px]' />
                    <p className='text-[#393939] mb-[12px] font-[Epilogue] font-[500] text-[20px] leading-[22px]'>Nettoyage</p>
                    <p className='text-[#9C9C9C] font-[Geist] font-[400] text-[14px] leading-[17px]'>Selon vos besoins</p>
                </div>
                <div className='w-fit h-[115px] flex flex-col items-center'>
                    <img src='/Groupe_56.png' className='mb-[12px]' />
                    <p className='text-[#393939] mb-[12px] font-[Epilogue] font-[500] text-[20px] leading-[22px]'>Commande Illimitée</p>
                    <p className='text-[#9C9C9C] font-[Geist] font-[400] text-[14px] leading-[17px]'>Tout est possible</p>
                </div>
                <div className='w-fit h-[115px] flex flex-col items-center'>
                    <img src='/Groupe_123.png' className='mb-[12px]' />
                    <p className='text-[#393939] mb-[12px] font-[Epilogue] font-[500] text-[20px] leading-[22px]'>Transport & Enlèvement</p>
                    <p className='text-[#9C9C9C] font-[Geist] font-[400] text-[14px] leading-[17px]'>On s’occupe de tout.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services