import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Landing from './Landing';
import Navbar from './Navbar';
import { AuthProvider } from '../Provider/Provider';
import { Slide, ToastContainer } from 'react-toastify';

const Root = () => {
    const {dark} = useContext(AuthProvider);
    return (
        <div className={`unbounded ${dark? "bg-[#222222] text-white":"bg-[#FBFBFB] text-black"} `}>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Slide}
/>
            <div className=''>
            
                <Navbar ></Navbar>
            
            {/* <Landing></Landing> */}
                
                <Outlet></Outlet>
                
            </div>
        </div>
    );
};

export default Root;