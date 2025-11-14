import React, { useContext } from "react";
import Rooney from "./../assets/wallpaperflare.com_wallpaper (1).jpg";
import Rooney1 from "./../assets/wallpaperflare.com_wallpaperMD.jpg";
import Rooney2 from "./../assets/wallpaperflare.com_wallpaperSM.jpg";
import Rooney3 from "./../assets/wallpaperflare.com_wallpaperCustom.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import { AuthProvider } from "../Provider/Provider";
import { Link } from "react-router-dom";
const Landing = () => {
  const { dark, user } = useContext(AuthProvider);

  return (
    <div className="relative h-screen lg:mb-28 md:mb-12 -mb-32">
      <div className="absolute ">
        <img
          src={Rooney}
          alt=""
          className="w-full brightness-75 lg:block md:hidden hidden custom-sm:hidden"
        />
        <img
          src={Rooney1}
          alt=""
          className="w-full brightness-75 md:block lg:hidden hidden  custom-sm:hidden"
        />
        <img
          src={Rooney2}
          alt=""
          className="w-full brightness-75 lg:hidden md:hidden  custom-sm:hidden"
        />
        <img
          src={Rooney3}
          alt=""
          className="w-full brightness-75 lg:hidden md:hidden hidden  custom-sm:block"
        />
        <div
          className={`absolute -bottom-1 left-0 w-full h-1/3 bg-gradient-to-t ${
            dark ? "from-[#222222]/100" : "from-[#FBFBFB]/100"
          }  border-b-0 to-transparent`}
        ></div>{" "}
      </div>
      <div className="flex flex-col pt-44 max-w-screen-lg mx-auto text-left pl-3 text-white">
        <h1 className="lg:text-4xl md:text-3xl text-xl z-10">
          Power Your Game with <br />
          <Fade direction="top">
            <span className="text-6xl">
              {" "}
              <span className="text-[#FFEB00]">C</span>oreUp
            </span>
          </Fade>
        </h1>
        <p className="lg:text-sm text-[11px]  lg:w-2/5 w-2/3 text-gray-300 mt-4 bg-red z-10">
          Discover high-performance sports accessories designed to elevate every
          move. Whether you train, compete, or conquer — CoreUp has your back.
        </p>
        <div className="flex mt-6 -ml-1">
          <button
            className={`btn px-[13px] rounded-full transition-all duration-200 hover:drop-shadow-2xl border-0 ${
              dark
                ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
                : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
            } mr-2 z-10 `}
          >
            Buy Product
          </button>
          <Link
            to="/addProduct"
            className={`btn px-[13px] rounded-full transition-all duration-200 hover:drop-shadow-2xl border-0 ${
              dark
                ? "bg-[#FFEB00] text-black hover:bg-black hover:text-[#FFEB00]"
                : "bg-black text-[#FFEB00] hover:bg-[#FFEB00] hover:text-black"
            } mr-2 z-10 `}
          >
            Add product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
