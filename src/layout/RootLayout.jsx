import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Pages/Footer';

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