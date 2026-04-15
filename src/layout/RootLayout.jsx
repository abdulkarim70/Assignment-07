import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div>
         <Navbar/>
         <Outlet/>
         <h1>Footer</h1>
        </div>
    );
};

export default RootLayout;