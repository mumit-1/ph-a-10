
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
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Helmet } from "react-helmet-async";
const Login = () => {
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
  const [privacy, setPrivacy] = useState(false);
 const {dark,loginAcc,setUser} = useContext(AuthProvider);
   const Signin = (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    // setEmail(emailX);  
    const pass = e.target.pass.value;
    loginAcc(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        // navigate(locate);
        toast("Successfully logged in!");
      })
      .catch((error) => {
        alert(error);
      });
  };
    return (
          <div className="max-w-screen-lg mx-auto  lg:h-screen h-screen  pb-10 pt-32 lg:pt-0 md:pt-16">
            <div className="   w-full  lg:pt-52     p-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 12 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    // key={useLocation().pathname}
                  >
                    <div className="flex flex-col  lg:gap-10 items-center justify-center ">
            <div className="lg:w-full  w-full flex items-center   mb-32 md:mb-40 lg:mb-0  relative md:-top-56 lg:-top-[450px] -top-[130px]">
      
           <DotLottieReact
  src="https://lottie.host/5122c510-b8ac-4837-926d-57205cde4774/p9pembxzaF.lottie"
  loop
  autoplay
  className="w-full  relative "
  speed={0.75}
/>
            {/* <DotLottieReact
     src="https://lottie.host/5122c510-b8ac-4837-926d-57205cde4774/p9pembxzaF.lottie"
      loop
      autoplay
      className="border-2 border-transparent    lg:pb-32 lg:w-full absolute"
    /> */}
            </div>
            {/* login */}
            <div
              className="lg:w-1/2 w-full lg:my-0 md:my-10 mb-5 lg:ml-0  lg:justify-start absolute md:top-52 lg:top-56  top-56"
              data-aos="zoom-in"
            >
              <div className="w-[330px] mx-auto ">
                <h2 className="text-2xl font-semibold text-center">
                  Welcome back!
                </h2>
                <p className="text-gray-500 text-center">
                  Please enter your details
                </p>
                <form className="mt-4" onSubmit={Signin}>
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
                    <div className="flex relative">
                      <input
                        type={privacy ? "text" : "password"}
                        name="pass"
                        className={`w-full border-2 ${dark ? "border-gray-400" : "border-gray-400"} rounded-full p-2 focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3.5 top-3"
                        onClick={() => setPrivacy(!privacy)}
                      >
                        {privacy ? <FiEye /> : <FiEyeOff />}
                      </button>
                    </div>
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
                  <Link to="/signup" className="text-blue-500">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
       
                    </div>
                  </motion.div>
                </div>
          </div>
    );
};

export default Login;