import React, { use } from 'react';
import { useOutletContext } from 'react-router';
import ProfileCard from './ProfileCard';

const Friends = () => {
    const friendsData=useOutletContext()
    console.log(friendsData);
    return (
        <div className='pt-5'>
      <h2 className='font-semibold text-xl'> Your Friends</h2>
    <div className='grid grid-cols-4 gap-2'>
          {friendsData.map(friendData=><ProfileCard key={friendData.id}/>)}
    </div>
        </div>
    );
};

export default Friends;