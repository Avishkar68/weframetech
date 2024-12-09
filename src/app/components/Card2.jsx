import React from "react";
import { CiHeart } from "react-icons/ci";
const Card2 = () => {
  return (
    <div className="w-[506px] h-[438px]  ">
      <div className="h-[362px] p-[10px] w-full flex flex-col items-center justify-between bg-[#F9F7F5] rounded-md">
        <div className="w-full flex items-center justify-between">
          <CiHeart className="text-[32px]" />
          <p className=" uppercase text-[#111928] font-[Geist] text-[10px] leading-[15px] align-center bg-[#FFFFFF] py-[0.5px] px-[2.5px] rounded-[4px]">
            Art de la table
          </p>
        </div>
        <img
          src="/productside.jpeg"
          className="w-[224px] h-[224px] mix-blend-darken"
        />
        <div></div>
        {/* <div className=" w-[310px] h-[50px] border border-black rounded-md">
          
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-around gap-[8px] mt-[8px] ">
        <div className="flex items-center justify-between w-[466px] h-[30px] text-[24px] leading-[30px] text-[#393939] font-playfair">
          <p>Title</p>
          <p className="font-[Geist]">
            0<sup className="text-[14px]">€</sup>
          </p>
        </div>
        <div className="h-[26px] w-[466px] font-[Geist] flex items-center justify-between">
          <p className="w-[237px] font-[400] text-[14px] leading-[17px] text-[#9C9C9C] ">
            0,35€/Pièce ·
            <span className="text-[10px] leading-[12px]"> RÉF : VABGN5</span>
          </p>
          <p className="text-[11px] leading-[13px] align-center bg-[#F1F4F6] text-[#546A7D] rounded-[20px] px-[8px] py-[6px]">
            20 pièces
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
