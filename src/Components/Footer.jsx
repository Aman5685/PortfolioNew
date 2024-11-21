//import React from "react";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialYoutube } from "react-icons/sl";


function Footer() {
  return (
    <>
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-22">
          <div className=" flex flex-col items-center justify-center">
              <p className="text-4xl text-[#64FFDA]"> Aman Yadav</p>
              <ul className="flex space-x-5 py-4 text-[#8892B0]">
                  <li>
                    <a href="https://www.github.com/" target="_blank">
                      <FiGithub className="text-2xl cursor-pointer  hover:text-[#64FFDA] hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <PiLinkedinLogoLight className="text-2xl cursor-pointer hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <IoLogoInstagram className="text-2xl cursor-pointer hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <SlSocialYoutube className="text-2xl cursor-pointer hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                </ul>
            <div className="flex flex-col items-center">
              <p className="text-3xl text-[#8892B0] font-serif ml-4">
              Copyright  &copy; 2024 Aman Yadav | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
