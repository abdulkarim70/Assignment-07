import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    const data = useLoaderData();

    return (
        <div>
         <Navbar/>
         <Outlet context={data}/>
        <Footer/>
        </div>
    );
};

export default RootLayout;