import React from 'react';
import Rooney from './../assets/wallpaperflare.com_wallpaper (1).jpg'
import { Fade, Slide } from 'react-awesome-reveal';
const Landing = () => {
    return (
        <div className="relative">
            <div className='absolute -z-50 '><img src={Rooney} alt="" className="w-full brightness-75"/> </div>
            <div className="flex flex-col pt-44 max-w-screen-lg mx-auto text-left">
                <h className="text-4xl  ">Power Your Game with <br /><Fade direction='top'><span className='text-6xl'> CoreUp</span></Fade></h>
                <p className='text-sm w-2/5 text-gray-300 mt-4'>Discover high-performance sports accessories designed to elevate every move. Whether you train, compete, or conquer — CoreUp has your back.</p>
            </div>
        </div>
    );
};

export default Landing;