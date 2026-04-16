import React from 'react';
import Banner from './Banner';
import CountDashboard from './CountDashboard';
import Friends from './Friends';

const HomePage = () => {
    return (
        <div className=' bg-gray-100'>
            <Banner/>
            <CountDashboard/>
            <Friends/>
        </div>
    );
};

export default HomePage;