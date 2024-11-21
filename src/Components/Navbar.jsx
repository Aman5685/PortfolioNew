import "../assets/Navbar.css";
import  { useState } from "react";
import logo from "../../public/logo navbar.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Portfolio",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl bg-[#315a97] container mx-auto px-4 md:px-20 h-16  fixed top-0 left-0 right-0 z-50 shadow-md text-gray-400">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={logo} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer hover:text-[#64FFDA] hover:scale-125 duration-500">
              Ama<span className="text-[#64FFDA] text-2xl">n</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-[#64FFDA] hover:scale-125 duration-500 cursor-pointer "
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-[#38598b]">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="font-semibold cursor-pointer hover:text-[#64FFDA] scale-105 duration-200s"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
