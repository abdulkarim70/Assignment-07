import { useOutletContext } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Friends = () => {
  const friendsData = useOutletContext();

  return (
    <div className="pt-5 max-w-6xl mx-auto px-4">
      
      
      <h2 className="font-semibold text-xl sm:text-2xl mb-4">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        
        {friendsData?.map((friendData) => (
          <ProfileCard
            friendData={friendData}
            key={friendData.id}
          />
        ))}

      </div>
    </div>
  );
};

export default Friends;