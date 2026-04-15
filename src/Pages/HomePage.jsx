import React from 'react';
import Banner from './Banner';
import CountDashboard from './CountDashboard';

const HomePage = () => {
    return (
        <div className=' bg-gray-100'>
            <Banner/>
            <CountDashboard/>
        </div>
    );
};

export default HomePage;