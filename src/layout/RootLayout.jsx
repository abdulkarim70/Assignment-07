import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Pages/Footer';

const RootLayout = () => {
    return (
        <div>
         <Navbar/>
         <Outlet/>
        <Footer/>
        </div>
    );
};

export default RootLayout;