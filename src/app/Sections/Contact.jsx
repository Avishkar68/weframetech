import React from "react";
import { IoMdArrowForward } from "react-icons/io";


const Contact = () => {
  return (
    <div className=" absolute top-[2890px] w-fit h-[300px] gap-[19px]  flex items-center justify-between mx-6 ">
      <div className="w-[680px] h-[300px] overflow-hidden rounded-[20px]">
        <img src="/contact.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="w-[770px] h-[300px] rounded-[20px] bg-[#FFF3F9] flex flex-col items-start justify-around p-[34px]">
        <p className="font-[Epilogue] font-[500] text-[43px] leading-[53px] text-[#414141]">S’inscrire & économiser <span className="text-[#63D4DE]">10%</span></p>
        <p className="w-[716px] font-[Geist] font-[400] text-[14px] leading-[22px] text-[#BDA2B0]">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
        <div className="flex gap-2">
        <input
            
            type="email"
            placeholder="john@doe.com"
            className="w-[565px]  h-[58px] rounded-md p-[22px] text-[#A68A98] text-[18px] font-[Geist] font-[300] "
          />
            <div className="flex gap-1 items-center justify-center py-[18px] rounded-md px-[15px] bg-[#63D4DE]">
                <p className="font-[Epilogue] font-[500] text-[18px] leading-[18px] text-[#FFFFFF]">S’inscrire</p>
                <IoMdArrowForward className="text-[22px] text-white"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
