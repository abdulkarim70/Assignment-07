
import { useOutletContext } from 'react-router';
import ProfileCard from './ProfileCard';

const Friends = () => {
    const friendsData=useOutletContext()
    console.log(friendsData);
    return (
        <div className='pt-5 max-w-6xl mx-auto'>
      <h2 className='font-semibold text-xl'> Your Friends</h2>
    <div className='grid grid-cols-4 gap-2 '>
          {friendsData.map(friendData=><ProfileCard friendData={friendData} key={friendData.id}/>)}
    </div>
        </div>
    );
};

export default Friends;