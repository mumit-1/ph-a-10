
// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Google from "../assets/google.webp";
import { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// import pic from "../assets/1000031964.jpg";
import { toast } from "react-toastify";
import React from "react";
import { AuthProvider } from "../Provider/Provider";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Helmet } from "react-helmet-async";
const Login = () => {
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
 
 const {dark} = useContext(AuthProvider);
    return (
          <div className="max-w-screen-lg mx-auto h-screen pt-20">
            <div className="   w-full  lg:pt-32     p-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 12 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    // key={useLocation().pathname}
                  >
                    <div className="flex flex-col gap-0 lg:flex-row items-center justify-center">
            <div className="lg:w-full  w-full flex items-center justify-center lg:justify-end lg:hidden mb-7">
      
            <DotLottieReact
      src="https://lottie.host/5ce81e2f-5537-47ff-8f52-649dd5cfcf3c/up3wovH3Mj.lottie"
      loop
      autoplay
      speed="0.7"
    />
            </div>
            {/* login */}
            <div
              className="lg:w-1/2 w-full lg:my-0 md:my-10 mb-5  flex items-center justify-center lg:justify-start"
              data-aos="zoom-in"
            >
              <div className="w-[330px] mx-auto ml-52">
                <h2 className="text-2xl font-semibold text-center">
                  Welcome back!
                </h2>
                <p className="text-gray-500 text-center">
                  Please enter your details
                </p>
                <form className="mt-4" >
                  <div>
                    <label className="block text-sm font-medium pl-2 opacity-80">Email</label>
                    <input
                      type="email"
                      name="email"
            
                      className={`w-full border-2 ${dark?"border-gray-400":"border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent  focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium pl-2 opacity-80">Password</label>
                    <input
                      type="password"
                      name="pass"
                      className={`w-full border-2 ${dark?"border-gray-400":"border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent  focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
            
                      <button
              className={`btn w-full mt-4  rounded-full transition-all duration-200 hover:drop-shadow-2xl ${
                dark
                  ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00] border-2 border-[#FFEB00]"
                  : "bg-black text-[#FFEB00] border-0 hover:bg-[#FFEB00] hover:text-black"
              }`}
            >
              Login
            </button>
                </form>
                <button
            
                  className="mt-2 w-full bg-gray-100 text-black rounded-full py-2 flex items-center justify-center hover:bg-gray-200 transition "
                >
                  <img src={Google} className="w-7 h-7 " alt="" />
                  {/* <span className=" -ml-1 font-bold">oogle</span> */}
                </button>
                <p className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  {/* <Link to="/register" className="text-blue-500">
                    Sign Up
                  </Link> */}
                </p>
              </div>
            </div>
            <div
              className="  flex items-center justify-center lg:justify-end md:hidden lg:block hidden "
              data-aos="fade-right"
            >
              {/* <img
                src="https://i.pinimg.com/736x/b8/4a/b9/b84ab9b1f6117b4c6347d56f2b969381.jpg"
                alt="Illustration"
                className=" rounded-2xl w-full h-full object-cover"
              /> */}
      {/* <div className="w-full h-full"> */}
    
          <DotLottieReact
      src="https://lottie.host/6919b190-7232-4688-9ebd-f67260f7d02f/VAjUBZBqTu.lottie"
      loop
      autoplay
      speed="0.9"
      className="border-2"
    />
      {/* </div> */}
            </div>
                    </div>
                  </motion.div>
                </div>
          </div>
    );
};

export default Login;