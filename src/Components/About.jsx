//import React from "react";
import "../assets/About.css";
import pic from "../../public/mypic.jpg";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialYoutube } from "react-icons/sl";
import { TbBrandLeetcode } from "react-icons/tb";

//import { SiMongodb } from "react-icons/si";
//import { SiExpress } from "react-icons/si";
//import { FaReact } from "react-icons/fa";
//import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-2 md:px-20 my-16"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="font-bold text-3xl text-[#64FFDA]">Hi, I am</span>
              <h1 className="text-6xl text-white">Aman Yadav</h1>
            <div className="flex space-x-5 text-white md:text-4xl">
              <h2 className="text-2xl"><span className="uppercase text-3xl">I'</span> m a</h2>
              <h3></h3>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-[#64FFDA] font-bold position"
                strings={["Developer", "Programmer", "Coder","Student"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-xl md:text-md text-justify text-[#8892B0] tracking-tight">
            I'm a passionate Full stack web Developer specialized in crafting efficient and scalable solutions,deliver top-notch web applications, 
            As I embark on my job search, I am eager to leverage my technical expertise and problem-solving abilities.
             Let's connect and create something amazing together!  
            </p>
            <br />
            <div className="">
              <a href="https://drive.google.com/file/d/1Y2qeH7e5Wa0TM6Iajgl1cNtZPU5KqW5q/view?usp=sharing" target="_blank">
              <button className="bg-[#64FFDA] px-4 py-3 rounded-md relative text-black hover:bottom-1" type="submit">Check Resume    
              </button></a>
              <a href="mailto:amanyadav5685@gmail.com" target="_blank">
              <button className="relative left-8 px-8 py-3 hover:bottom-1 text-[#00fff1] hire" type="submit">Hire Me</button></a>
            </div>
            {/* social media icons-flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0*/}
            <div className="hidden md:flex text-[#8892B0] items-center fixed bottom-52 left-[-65px] rotate-90">
              <div className="space-y-2">
                {/*<h1 className="font-bold text-center ">Available on</h1>*/}
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.github.com/" target="_blank">
                      <FiGithub className="text-2xl cursor-pointer -rotate-90 hover:text-[#64FFDA] hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <PiLinkedinLogoLight className="text-2xl cursor-pointer -rotate-90 hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <IoLogoInstagram className="text-2xl cursor-pointer -rotate-90 hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <SlSocialYoutube className="text-2xl cursor-pointer -rotate-90 hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/problemset/" target="_blank">
                      <TbBrandLeetcode className="text-2xl cursor-pointer -rotate-90 hover:text-[#64FFDA] hover:scale-125 duration-300"/>
                    </a>
                  </li>
                </ul>
              </div>
              {/*
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>*/}
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] mypic"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
