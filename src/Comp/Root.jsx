import React from 'react';
import { Outlet } from 'react-router-dom';
import Landing from './Landing';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='unbounded'>
            <div className=''>
            
                <Navbar></Navbar>
            
            <Landing></Landing>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;