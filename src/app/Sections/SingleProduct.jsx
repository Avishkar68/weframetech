"use client";

import React from "react";
import { CiHeart } from "react-icons/ci";
import { LuCircleSlash2 } from "react-icons/lu";
import { TfiRulerAlt } from "react-icons/tfi";
import { GoDash } from "react-icons/go";
import { GoPlus } from "react-icons/go";

const SingleProduct = () => {
  return (
    <div className="flex flex-col mx-[26px]">
      <div className="flex gap-2 py-[12px] font-[Geist] text-[14px] leading-[21px]">
        <p className="text-[#393939] font-[500]">Home</p>
        <p className="text-[#9C9C9C] font-[500]">●</p>
        <p className="text-[#9C9C9C] font-[500]">Art de la table</p>
      </div>
      <div className="flex justify-between items-center gap-[25px]">
        {/* first part */}
        <div className="flex flex-col gap-[46px]">
          <div className="w-[761px] h-[652px] rounded-md flex bg-[#F8F6F4]">
            <div className="flex flex-col items-center gap-[5px] mt-[10px] ml-[11px] ">
              <div className="w-[55px] bg-[#FFFFFF] h-[55px] flex items-start justify-center">
                <img className="w-[40px] h-[40px]" src="/productside.jpeg" />
              </div>
              <div className="w-[55px] bg-[#FFFFFF] opacity-50 h-[55px]  flex items-starts justify-center">
                <img className="w-[40px] h-[40px] " src="/productside.jpeg" />
              </div>
              <div className="w-[55px] bg-[#FFFFFF] opacity-50 h-[55px]  flex items-start justify-center">
                <img className="w-[40px] h-[40px] " src="/productside.jpeg" />
              </div>
              <div className="w-[55px] bg-[#FFFFFF] opacity-50 h-[55px]  flex items-start justify-center">
                <img className="w-[40px] h-[40px] " src="/productside.jpeg" />
              </div>
            </div>
            <img
              className="mix-blend-multiply w-[552px] h-[552px] mt-[42px] mb-[58px] ml-[45px]"
              src="/product.jpeg"
            />
          </div>
          <div className="w-[710px] h-fit  flex flex-col gap-[10px]">
            <p className="font-[Epilogue] text-[20px] font-[400] leading-[25px] text-[#111928]">
              Description produit
            </p>
            <p className="font-[Geist] text-[14px] font-[400] leading-[18px] text-[#9C9C9C]">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>

        {/* second part */}
        <div className="flex flex-col gap-[46px] mt-[-30px]">
          <div className="w-[704px] h-[635px] rounded-md  flex flex-col justify-between ">
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center justify-between">
                <p className="font-playfair text-[#111928] text-[30px] leading-[37.5px]">
                  Cheese – appareil à raclette 1/2 roue
                </p>
                <CiHeart className="text-[36px] text-[#111928]" />
              </div>
              <div className="flex items-center gap-[7px] ">
                <p className="font-[Geist] font-[400] text-[#111928] text-[24px] leading-[30px]">
                  39,50€
                </p>
                <span className="font-[Geist] font-[400] text-[14px] leading-[17.5px] text-[#9C9C9C]">
                  /pièce
                </span>
              </div>

              <div className="w-[700px] border-[0.5px] border-[#9C9C9C] opacity-40 bg-[#9C9C9C]"></div>

              <div className="flex items-center justify-between ">
                <div className="flex gap-[16px]">
                  <div className="w-[70px] h-[25px] flex items-center gap-[10px] justify-center font-[Geist] text-[16px] leading-[20px] text-[#111928]">
                    <TfiRulerAlt className="text-[#9C9C9C] text-[25px]" />
                    <p>
                      20<sup>cm</sup>
                    </p>
                  </div>
                  <div className="w-[70px] h-[25px] flex items-center gap-[10px] justify-center font-[Geist] text-[16px] leading-[20px] text-[#111928]">
                    <LuCircleSlash2 className="text-[#9C9C9C] text-[25px]" />
                    <p>
                      50<sup>cm</sup>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-[Geist] font-[500] text-[12px] leading-[15.6px] text-[#9C9C9C]">
                    RÉF : VABGN5
                  </p>
                </div>
              </div>

              <div className="w-[700px] border-[0.5px] border-[#9C9C9C] opacity-40 bg-[#9C9C9C]"></div>

              <div className="font-[Geist] font-[400] text-[14px] leading-[18.2px] text-[#5D5D5D]">
                <p>
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue
                </p>
                <p>Réglable en hauteur</p>
                <p>Appareil à raclette professionnel</p>
                <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                <p className="h-[18px]"></p>
                <p>220V</p>
                <p>900W</p>
              </div>
            </div>

            <div className="flex flex-col gap-[19px]">
            <div className="w-[700px] border-[0.5px] border-[#9C9C9C] opacity-40 bg-[#9C9C9C]"></div>
              <div className="flex items-center justify-between">

              <div className="w-[153px] h-[50px] border-[1px] rounded-sm border-[#00000021] font-[Geist] font-[500] text-[16px] leading-[24px] flex items-center justify-around">
                <GoDash />
                <p>1</p>
                <GoPlus />
              </div>
              <div className="w-[547px] h-[50px] rounded-sm  font-[Geist] font-[500] text-white text-[16px] leading-[20px] flex items-center bg-[#5CD2DD] justify-center">
                Ajouter au panier
              </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[710px] h-[62px] bg-[#FBF9F899] flex items-center ml-[-10px] justify-between pt-[16px] pl-[18px] pr-[19px]">
              <p className="font-[Epilogue] font-[500] text-[16px] leading-[20px]">Livraisons</p>
              <GoPlus  className="text-[24px]"/>
            </div>
            <div className="w-[710px] h-[62px] bg-[#FBF9F899] flex items-center ml-[-10px] justify-between  pt-[16px] pl-[18px] pr-[19px]">
              <p className="font-[Epilogue] font-[500] text-[16px] leading-[20px]">Livraisons</p>
              <GoPlus  className="text-[24px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
