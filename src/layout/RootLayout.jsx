import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
    const data = useLoaderData();
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div>
            <Navbar/>

            {isLoading && (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            )}

            <Outlet context={data}/>

            <Footer/>
        </div>
    );
};

export default RootLayout;