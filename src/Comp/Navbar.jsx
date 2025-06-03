import React, { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Navbar = () => {
    const {dark,setDark} = useContext(AuthProvider);
    const handleDark = () => {
        setDark(!dark);
    }
    const link = <>
    <li className="">
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
    </>
  return (
 <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg z-50 px-2">
  <div className="">
    <div className={`navbar shadow-2xl ${dark?" bg-black/25" : "bg-white/10"}  backdrop-blur-md rounded-full`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg> */}
            X
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content ${dark? "bg-black/85  ":"bg-white/80 text-10"} rounded-xl backdrop-blur-sm z-10 mt-6 w-52 p-2 shadow-2xl `}
          >
            {link}
          </ul>
        </div>
        <a className=" text-3xl text-[#FFEB00] ">CoreUp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{link}</ul>
      </div>
      <div className="navbar-end">
        <button className={`btn px-[13px] rounded-full transition-all duration-200 hover:drop-shadow-2xl ${
    dark
      ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
      : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
  } mr-2`}
  onClick={handleDark}
  >{dark?<FaMoon />:<FaRegMoon />}
  
  </button>
    <button
  className={`btn rounded-full transition-all duration-200 hover:drop-shadow-2xl ${
    dark
      ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
      : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
  }`}
>
  Button
</button>


      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
