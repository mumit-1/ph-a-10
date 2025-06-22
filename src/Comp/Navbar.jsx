import React, { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
    const {dark,setDark,user} = useContext(AuthProvider);
    const locate = useLocation();
    console.log(user);
    const handleDark = () => {
        setDark(!dark);
        
    } 
    const link = <>
              <button className={`${locate.pathname==="/login"? "border-b-2 border-[#FFEB00]" : null} hover:-translate-y-0.5 transition duration-650`}>
                <Link to="/login">Login</Link>
              </button>
              <button className={`${locate.pathname==="/signup" ? "border-b-2 border-[#FFEB00]" : null} hover:-translate-y-1 transition duration-650`}>
                <Link to="/signup">Sign up</Link>
              </button>
              <button className={`${locate.pathname==="/"? "border-b-2 border-[#FFEB00]" : null} hover:-translate-y-1 transition duration-650`}>
                <Link to="/">Home</Link>
              </button>
    </>
  return (
 <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg z-50 px-2">
  <div className="">
    <div className={`navbar shadow-2xl ${dark?" bg-black/30" : "bg-white/30"}  backdrop-blur-md rounded-full px-4`}>
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
            className={`menu menu-sm dropdown-content ${dark? "bg-black/85  ":"bg-white/80 "} rounded-xl backdrop-blur-sm z-10 mt-6 w-52 p-2 shadow-2xl `}
          >
            {link}
          </ul>
        </div>
        <a className=" text-3xl text-[#FFEB00] drop-shadow-2xl">CoreUp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        
        <ul className={`space-x-7 menu-horizontal px-1  ${dark?" text-white" : "text-black"}`}>{link}</ul>
      </div>
      <div className="navbar-end">
        <button className={`btn px-[13px] rounded-full transition-all duration-200 hover:drop-shadow-2xl border-0 ${
    dark
      ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
      : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
  } mr-2`}
  onClick={handleDark}
  >{dark?<FaMoon />:<FaRegMoon />}
  
  </button>
    {/* <button
  className={`btn rounded-full transition-all duration-200 hover:drop-shadow-2xl border-0  ${
    dark
      ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
      : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
  }`}
>
  Button
</button> */}
 {user && user?.email ? (
            <div className="flex bg-base-200 border p-1.5 rounded-full">
              <Link
                to="/profile"
                className="flex justify-center items-center tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </Link>
              <button
                className="btn rounded-full hover:bg-transparent tooltip tooltip-bottom bg-transparent border-0 shadow-none"
                // onClick={}
                data-tip="Log Out"
              >
                <PiSignOutBold className="text-xl text-red-600" />
                {/* Log Out  */}
              </button>
            </div>
          ) : locate.pathname === "/login" ||
            locate.pathname === "/signup" ? null : (
            <Link to="/login"
             className={`btn rounded-full transition-all duration-200 hover:drop-shadow-2xl border-0  ${
    dark
      ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
      : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
  }`}
             >
              Sign in
            </Link>
          )}

      </div>
    </div>
  </div>
</div>

  );
};

export default Navbar;
