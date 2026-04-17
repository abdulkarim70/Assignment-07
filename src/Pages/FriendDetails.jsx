import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useOutletContext, useParams } from "react-router-dom";
import CallImg from '../assets/call.png'
import TextImg from '../assets/text.png'
import VideoImg from '../assets/video.png'
import toast from "react-hot-toast";
const FriendDetails = () => {
  const friendsData = useOutletContext();
  const { id } = useParams();

  const friend = friendsData.find((f) => f.id === Number(id));

  if (!friend) {
    return <p className="p-6 text-center">Friend not found</p>;
  }

  const getStatusStyle = () => {
    switch (friend.status) {
      case "On Track":
        return "bg-green-500";
      case "Need Attention":
        return "bg-yellow-400";
      default:
        return "bg-red-400";
    }
  };

// handle functions
const handleAction = (type) => {
  let actionText = "";

  if (type === "Call") actionText = "Called with";
  if (type === "Text") actionText = "Texted with";
  if (type === "Video") actionText = "Video called with";

  const newEntry = {
    id: Date.now(),
    type,
    title: `${actionText} ${friend.name}`,
    time: new Date().toLocaleString(),
  };

  const existing = JSON.parse(localStorage.getItem("timeline")) || [];
  const updated = [newEntry, ...existing];

  localStorage.setItem("timeline", JSON.stringify(updated));
   toast.success(`${actionText}  ${friend.name}`);
};

  return (
   <div  className="bg-[#F8FAFC]">
     <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      
     
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 mx-auto rounded-full border-4 border-gray-100 mb-4"
        />

        <h2 className="text-xl font-semibold">{friend.name}</h2>

        <span
          className={`inline-block mt-3 px-4 py-1 text-xs text-white rounded-full ${getStatusStyle()}`}
        >
          {friend.status}
        </span>

        <p className="mt-4 text-sm text-gray-500 bg-[#CBFADB] w-[50px] mx-auto rounded-full">{friend.interest}</p>
        <p className="text-[#64748B] mt-2">{friend.bio}</p>
        <p className="text-[#64748B]"> email : {friend.email}</p>

    
       <div className="space-y-2 pt-2">
         <div className="bg-gray-100 rounded-md flex gap-1 justify-center items-center "> <RiNotificationSnoozeLine /><p> Snooze 2 Weeks</p></div>
        <div className="bg-gray-100 rounded-md flex gap-1 justify-center items-center "><FiArchive /> <p>Archive</p></div>
        <div className="bg-gray-100 rounded-md flex gap-1 justify-center items-center text-red-400 "><RiDeleteBin6Line /><p>Delete</p></div>
       </div>

      </div>

      
      <div className="md:col-span-2 space-y-6">

  
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h2>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">
              {friend.goal}
            </h2>
            <p className="text-sm text-gray-500">Goal Days</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-[#244D3F]">
              {friend.next_due_date}
            </h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

      
        <div className="bg-white p-5 rounded-2xl shadow space-y-2 justify-center items-center">
          <div className="flex justify-between">
            <h2 className="text-[#244D3F]">Relationship Goal</h2>
            <button className="bg-[#E9E9E9] rounded-md text-[12px] px-3">Edit</button>
          </div>
          <h2><span className="text-[#64748B]">Connect every</span> <span className="font-bold">30 days</span></h2>
        </div>
<div className="bg-white rounded-xl text-center">
  <h2 className="text-[#244D3F] text-[16px] py-5">
    Quick Check-In
  </h2>

  <div className="flex justify-center gap-4 pb-4">
    
    <div onClick={()=>handleAction('Call')} className=" cursor-pointer flex flex-col items-center bg-gray-100 rounded-md py-3 px-6">
      <img className="w-8 h-8 mb-1" src={CallImg} alt="Call-image" />
      <h2 className="text-[16px]">Call</h2>
    </div>

    <div onClick={()=> handleAction('Text')} className="cursor-pointer flex flex-col items-center bg-gray-100 rounded-md py-3 px-6">
      <img className="w-8 h-8 mb-1" src={TextImg} alt="Text-image" />
      <h2 className="text-[16px]">Text</h2>
    </div>

    <div onClick={()=> handleAction('Video')} className="cursor-pointer flex flex-col items-center bg-gray-100 rounded-md py-3 px-6">
      <img className="w-8 h-8 mb-1" src={VideoImg} alt="Video-image" />
      <h2 className="text-[16px]">Video</h2>
    </div>

  </div>
</div>
      </div>
    </div>
   </div>
  );
};

export default FriendDetails;