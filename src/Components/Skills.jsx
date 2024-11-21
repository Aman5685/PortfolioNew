// import React from "react";
import html from "../../public/HTML.png";
import css from "../../public/CSS.png";
import sass from "../../public/SASS.png";
import javascript from "../../public/JavaScript (1).png";
import react from "../../public/React JS.png";
import redux from "../../public/Redux.png";
import tailwind from "../../public/Tailwind CSS.png";
import gsap from "../../public/GSAP.png";
import materialUI from "../../public/Material UI.png";
import bootstrap from "../../public/Bootstrap.png";
import daisyUI from "../../public/daisy UI.png";
import java from "../../public/Java.png";
import c from "../../public/C.png";
import Git from "../../public/Git.png";
import Github from "../../public/Github.png";
import Vscode from "../../public/VS Code.png";
import sublime from "../../public/sublime.png";
import netlify from "../../public/netlify.png";

function Skills() {
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl relative border-[0px] bottom-4 left-[-15px] hover:underline duration-75s  rounded-md text-[#8892B0] text-center font-bold mb-5 hover:text-[#64FFDA] duration-75s">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-5">
            {/*Frontend*/}
            <div className="md:w-[460px] md:h-[460px]  border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer shadow-[#64FFDA] shadow-lg  duration-300">
              <h1 className="text-white text-3xl text-center mt-4 font-thin hover:text-[#64FFDA] hover:scale-110 duration-300">Frontend</h1>
              <div className="flex mt-5 gap-3 justify-center flex-wrap">
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
               <img className="w-[48px]" src={html} alt="" /> 
               <div className="text-[#8892B0]">
                HTML
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl  items-center py-2 px-3 w-[120px] h-[54px]">
               <img className="w-[48px]" src={css} alt="" /> 
               <div className="text-[#8892B0]">
                CSS
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
               <img className="w-[48px]" src={sass} alt="" /> 
               <div className="text-[#8892B0]">
                SASS
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[170px] h-[54px]">
               <img className="w-[48px]" src={javascript} alt="" /> 
               <div className="text-[#8892B0] font-medium  ">
                JavaScript
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
               <img className="w-[48px]" src={react} alt="" /> 
               <div className="text-[#8892B0]">
                React
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[130px] h-[54px]">
               <img className="w-[48px]" src={redux} alt="" /> 
               <div className="text-[#8892B0]">
                Redux
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
               <img className="w-[48px]" src={tailwind} alt="" /> 
               <div className="text-[#8892B0]">
                Tailwind
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
               <img className="w-[48px]" src={gsap} alt="" /> 
               <div className="text-[#8892B0]">
                Gsap
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
               <img className="w-[48px]" src={materialUI} alt="" /> 
               <div className="text-[#8892B0]">
                Material UI
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[160px] h-[54px]">
               <img className="w-[48px]" src={bootstrap} alt="" /> 
               <div className="text-[#8892B0]">
                BootStrap
               </div>
              </div>
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[140px] h-[54px]">
               <img className="w-[48px]" src={daisyUI} alt="" /> 
               <div className="text-[#8892B0]">
                DaisyUI
               </div>
              </div>
              </div>
            </div>
            
            {/*Language*/}
            <div className="md:w-[450px] md:h-[460px] border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer shadow-[#64FFDA] shadow-lg  duration-300">
            <h1 className="text-white text-3xl text-center mt-4 font-thin hover:text-[#64FFDA] hover:scale-110 duration-300">Languages</h1>
             {/*C*/}
             <div className="flex mt-4 gap-3 justify-center flex-wrap">
             <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[100px] h-[54px]">
            <img src={c}
            className="w-[48px] px-1"
            alt="" />
            <div className="text-[#8892B0]">
              C
            </div>
            </div>
             {/*Java*/}
             <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
            <img src={java}
            className="w-[48px] px-1"
            alt="" />
            <div className="text-[#8892B0]">
              Java
            </div>
            </div>
             {/*Java Script*/}
             <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[170px] h-[54px]">
            <img src={javascript}
            className="w-[48px] px-1"
            alt="" />
            <div className="text-[#8892B0]">
            JavaScript
            </div>
            </div>
            </div>
            </div>
            {/*Tools*/}
            <div className="md:w-[450px] md:h-[460px] border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer shadow-[#64FFDA] shadow-lg duration-300">
              <h1 className="text-white text-3xl text-center mt-4 font-thin hover:text-[#64FFDA] hover:scale-110 duration-300">Tools</h1>
              {/*Git*/}
              <div className="flex gap-2 mt-5 items-center justify-center flex-wrap">
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[120px] h-[54px]">
                <img className="w-[48px]"
                 src={Git} alt="" />
                 <div className="text-[#8892B0]">
                  Git
                 </div>
              </div>
              {/*Git-hub*/}
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
                <img className="w-[40px]"
                 src={Github} 
                alt="" />
                <div className="text-[#8892B0]">
                  GitHub
                </div>
              </div>
              {/*Vs-code*/}
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
                <img className="w-[40px]"
                 src={Vscode}
                 alt="" />
                 <div className="text-[#8892B0]">
                  VS code
                 </div>
              </div>
              {/*Sublime*/}
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
                <img className="w-[40px]" 
                src={sublime} 
                alt="" />
                <div className="text-[#8892B0]">
                  Sublime
                </div>
              </div>
              {/*Netlify*/}
              <div className="flex gap-2 border border-text-[#8892B0] rounded-2xl items-center py-2 px-3 w-[150px] h-[54px]">
                <img className="w-[40px]" 
                src={netlify}
                 alt="" />
                 <div className="text-[#8892B0]">
                  Netlify
                 </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Skills;
