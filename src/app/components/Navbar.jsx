"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SlBulb } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <div className=" flex items-center justify-between m-[15px] md:m-[25px]">
      <div className="flex items-center md:items-start justify-center ">
        <img src="/logo.png" className=" h-[36px] md:h-[65px]" />
        <div className="  md:flex rounded-[6px] bg-[#f9fafb] h-[50px] w-[300px] md:w-[768px] flex items-center justify-between overflow-hidden focus-within:border focus-within:border-[#0093D0]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un produit"
            className="text-[#667482] w-[300] md:w-[694px] bg-transparent outline-none  h-[21px]  mx-[15px]"
          />
          <button className=" w-[19px] md:w-[49px]  h-[50px] flex items-center justify-center hover:bg-[#0093D0] focus:hover:bg-[#0093D0] hover:text-white  ">
          
            <CiSearch className="text-[24px] " />
          </button>
        </div>
      </div>
      <div className="hidden  md:flex items-start text-[14px] ">
        <div className="flex items-center justify-center p-[10px] gap-2">
          <SlBulb />
          <p>Inspirations</p>
        </div>
        <div className="flex items-center justify-center p-[10px] gap-2">
          <CiHeart />
          <p>Mes favoris</p>
          <span className="rounded-[30px] w-[28px] h-[18px] bg-[#CAD2D566] flex items-center justify-center ">24</span>
        </div>
        <div className="flex mt-[-12px] items-center justify-center p-[10px] gap-4">
          <div className="flex items-center justify-center text-white px-[16px] py-[10px] gap-2 rounded-[6px] border border-[#007AAD] bg-[#0093D0]">
            <FiShoppingCart />
            <p>Panier</p>
          </div>
          <div className="bg-[#EAEDEE] h-[44px] w-[44px] rounded-[50%]"></div>
          <div className="flex items-center justify-center">
            <p>FR</p>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>

      <div className="md:hidden"><RiMenuLine className="text-3xl" /></div>
    </div>
  );
};

export default Navbar;
