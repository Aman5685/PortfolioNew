//import React from "react";
import { GoDotFill } from "react-icons/go";
import project1 from"../../public/Project_1.png";
import project2 from"../../public/Project_2.png";
import project3 from"../../public/Project_3.png";
function PortFolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl relative border-[0px] bottom-4 left-[-15px] hover:underline duration-75s  rounded-md text-[#8892B0] text-center font-bold mb-5 hover:text-[#64FFDA] duration-75s">PortFolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-5">
          {/*Project-1*/}
            <div
              className="md:w-[330px] md:h-[500px] border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer hover:shadow-[#64FFDA] shadow-lg hover:scale-110 duration-300">
              <img
                src={project1}
                className="md:w-[350px] md:h-[230px] p-1 rounded-xl"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2"></div>
                <h1 className="px-2 text-white text-2xl">
                  bookStore
                  <button className="relative left-5 bottom- w-20 h-10 border-[1px]  border-[red] text-red-700 rounded-xl">
                  <GoDotFill className="relative border-[px] text-red-700 left-14 hover:scale-125 duration-300"/>
                  <a href="https://bookstorestudy.netlify.app/" target="_blank">
                    <h1 className="text-2xl relative border-[0px] uppercase text-red-700 bottom-5 right-2 *
                    hover:shadow-[red] hover:scale-110 duration-300
                    ">Live</h1></a></button>
                </h1>
                <p className="text-[#8892B0]">
                  It is a Online Book store web-app fully responsive or user authentication are working.
                  Frontend Design using React JS and Backend Setup using Node & Express Js Mongo-DB.
                  </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href="https://drive.google.com/file/d/1QZVNFpv4iMiAlzWvqbregyjxca6RMveq/view?usp=sharing" target="_blank">
                <button 
                type="submit"
                className="bg-[#64FFDA] relative hover:bottom-1 text-black font-bold px-4 py-2 rounded">
                  Video
                </button></a>
                <a href="https://github.com/Aman5685/OnlineBookStore.git" target="_blank">
                <button 
                type="submit"
                className=" text-[#64FFDA] relative hover:bottom-1 border-[1px] border-[#64FFDA] font-bold px-4 py-2 rounded">
                  Source code
                </button></a>
              </div>
            </div>
            {/*Project_2*/}
            <div
              className="md:w-[330px] md:h-[500px] border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer hover:shadow-[#64FFDA] shadow-lg hover:scale-110 duration-300">
              <img
                src={project2}
                className="md:w-[350px] md:h-[230px] p-1 rounded-xl"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2"></div>
                <h1 className="px-2 text-white text-2xl">
                  studyTree
                  <a href="https://amanresourcetreelink.netlify.app/" target="_blank">
                  <button className="relative left-5 bottom- w-20 h-10 border-[1px]  border-[red] text-red-700 rounded-xl">
                  <GoDotFill className="relative border-[0px] text-red-700 left-14 hover:scale-125 duration-300"/>
                    <h1 className="text-2xl relative border-[0px] uppercase text-red-700 bottom-5 right-2 *
                    hover:shadow-[red] hover:scale-110 duration-300
                    ">Live</h1></button></a>
                </h1>
                <p className="text-[#8892B0]">
                Study Tree is a comprehensive web application that serves as a centralized hub for all your study materials and roadmaps. Developed using the React.js framework.
                  </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href="https://drive.google.com/file/d/1XhsvOIqTVPPSxiO-ySQIDAYTwlSCMyyR/view?usp=sharing" target="_blank">
                <button 
                type="submit"
                className="bg-[#64FFDA] relative hover:bottom-1 text-black font-bold px-4 py-2 rounded">
                  Video
                </button></a>
                <a href="https://github.com/Aman5685/Aman-coder-Resource.git" target="_blank">
                <button 
                type="submit"
                className=" text-[#64FFDA] relative hover:bottom-1 border-[1px] border-[#64FFDA] font-bold px-4 py-2 rounded">
                  Source code
                </button></a>
              </div>
            </div>
            {/*Project_3*/}
            <div
              className="md:w-[330px] md:h-[500px] border-[2px] border-[#64FFDA] rounded-lg  p-1 cursor-pointer hover:shadow-[#64FFDA] shadow-lg hover:scale-110 duration-300">
              <img
                src={project3}
                className="md:w-[350px] md:h-[230px] p-1 rounded-xl"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2"></div>
                <h1 className="px-2 text-white text-2xl">
                  Shipping-Clone
                  </h1>
                  {/*Live Section Hide
                  <button className="relative left-5 bottom- w-20 h-10  border-[red] text-red-700 rounded-xl">
                  <GoDotFill className="relative border-[0px] text-red-700 left-14 hover:scale-125 duration-300"/>
                    <h1 className="text-2xl relative border-[0px] uppercase text-red-700 bottom-5 right-2 *
                    hover:shadow-[red] hover:scale-110 duration-300
                    ">Live</h1></button>*/}
                
                <p className="text-[#8892B0]">
                The shipping web app you developed features a well-designed user interface built with React.js,
                It showcases your proficiency in creating responsive and visually appealing web applications,
                Developed using React.js Framework.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href="https://drive.google.com/file/d/1CMjiWXVDkw3aadQTQmV2mNz6FoXeMW8B/view?usp=sharing" target="_blank">
                <button 
                type="submit"
                className="bg-[#64FFDA] relative hover:bottom-1 text-black font-bold px-4 py-2 rounded">
                  Video
                </button></a>
                <a href="https://github.com/Aman5685/CRM_Website.git" target="_blank">
                <button 
                type="submit"
                className=" text-[#64FFDA] relative hover:bottom-1 border-[1px] border-[#64FFDA] font-bold px-4 py-2 rounded">
                  Source code
                </button></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
