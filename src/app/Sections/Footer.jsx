import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[290px] w-full bg-white border-t border-gray-200 py-6 px-12">
      <div className="container mx-auto flex justify-between items-start mt-[40px]">
        {/* Logo Section */}
        <div className="flex gap-10 items-center">

        <div className="flex flex-col items-start">
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="WeFrameTech Logo"
            className="w-32"
          />
        </div>

        {/* Info Sections */}
        <div className="flex space-x-12">
          {/* Infos Pratiques */}
          <div>
            <h4 className="font-[600] font-[Epilogue] text-[18px] text-[#393939] mb-2">INFOS PRATIQUES</h4>
            <ul className="space-y-2">
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">À propos</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Livraisons & Reprises</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Mode d’emploi</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">F.A.Q</li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-[600] font-[Epilogue] text-[18px] text-[#393939] mb-2">LÉGAL</h4>
            <ul className="space-y-2">
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Mentions légales</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">CGU</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">CGV</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Politique de confidentialité</li>
            </ul>
          </div>

          {/* Mon Compte */}
          <div>
            <h4 className="font-[600] font-[Epilogue] text-[18px] text-[#393939] mb-2">MON COMPTE</h4>
            <ul className="space-y-2">
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Accéder à mon compte</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Ma liste d’envie</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Créer un compte</li>
              <li className="text-[#393939] hover:underline cursor-pointer text-[14px] leading-[17px] font-[Geist]">Mot de passe oublié</li>
            </ul>
          </div>
        </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-end">
          <h4 className="font-[600] font-[Epilogue] text-[18px] text-[#393939] mb-2">NOUS SUIVRE</h4>
          <div className="flex space-x-3">
            <a
              href="#"
              className=" flex items-center justify-center rounded-[6px]"
            >
              <FaTwitter className=" w-[42px] h-[42px] p-[10px] rounded-[6px] border" />

            </a>
            <a
              href="#"
              className=" flex items-center justify-center rounded-[6px]"
            >
              <FaInstagram className=" w-[42px] h-[42px] p-[10px] rounded-[6px] border" />
            </a>
            <a
              href="#"
              className=" flex items-center justify-center rounded-[6px]"
            >
              <FaLinkedinIn className=" w-[42px] h-[42px] p-[10px] rounded-[6px] border" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
