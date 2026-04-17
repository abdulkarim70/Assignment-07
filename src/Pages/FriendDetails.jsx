import { FiArchive } from "react-icons/fi";
import {
  RiDeleteBin6Line,
  RiNotificationSnoozeLine,
} from "react-icons/ri";
import { useOutletContext, useParams } from "react-router-dom";
import CallImg from "../assets/call.png";
import TextImg from "../assets/text.png";
import VideoImg from "../assets/video.png";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const friendsData = useOutletContext();
  const { id } = useParams();

  const friend = friendsData.find((f) => f.id === Number(id));

  if (!friend) {
    return <p className="p-6 text-center">Friend not found</p>;
  }

  const handleAction = (type) => {
    const map = {
      Call: "Called with",
      Text: "Texted with",
      Video: "Video called with",
    };

    const actionText = map[type];

    const newEntry = {
      id: Date.now(),
      type,
      title: `${actionText} ${friend.name}`,
      time: new Date().toLocaleString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem(
      "timeline",
      JSON.stringify([newEntry, ...existing])
    );

    toast.success(`${actionText} ${friend.name}`);
  };

  const StatusBadge = () => {
    const color =
      friend.status === "On Track"
        ? "bg-[#244D3F]"
        : friend.status === "Need Attention"
        ? "bg-yellow-400"
        : "bg-red-400";

    return (
      <span className={`px-4 py-1 text-xs text-white rounded-full ${color}`}>
        {friend.status}
      </span>
    );
  };

  const ActionBtn = ({ type, img }) => (
    <div
      onClick={() => handleAction(type)}
      className="cursor-pointer flex flex-col items-center bg-gray-100 rounded-md py-3 px-4 sm:px-6 hover:bg-gray-200 transition"
    >
      <img className="w-7 h-7 sm:w-8 sm:h-8 mb-1" src={img} alt={type} />
      <h2 className="text-sm sm:text-[16px]">{type}</h2>
    </div>
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="p-4 sm:p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

       
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center">

          <img
            src={friend.picture}
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-gray-100 mb-4"
          />

          <h2 className="text-lg sm:text-xl font-semibold">
            {friend.name}
          </h2>

          <div className="mt-2">
            <StatusBadge />
          </div>

          <p className="mt-3 text-xs sm:text-sm text-gray-500 bg-[#CBFADB] w-fit px-3 mx-auto rounded-full">
            {friend.interest}
          </p>

          <p className="text-[#64748B] mt-2 text-sm">{friend.bio}</p>
          <p className="text-[#64748B] text-sm">{friend.email}</p>

         
          <div className="space-y-2 pt-4">

            <div className="flex items-center gap-2 justify-center bg-gray-100 rounded-md py-2 hover:bg-gray-200 cursor-pointer">
              <RiNotificationSnoozeLine />
              <p className="text-sm">Snooze 2 Weeks</p>
            </div>

            <div className="flex items-center gap-2 justify-center bg-gray-100 rounded-md py-2 hover:bg-gray-200 cursor-pointer">
              <FiArchive />
              <p className="text-sm">Archive</p>
            </div>

            <div className="flex items-center gap-2 justify-center bg-gray-100 rounded-md py-2 text-red-400 hover:bg-gray-200 cursor-pointer">
              <RiDeleteBin6Line />
              <p className="text-sm">Delete</p>
            </div>

          </div>
        </div>

        
        <div className="lg:col-span-2 space-y-6">

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="bg-white p-5 rounded-2xl shadow text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#244D3F]">
                {friend.days_since_contact}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#244D3F]">
                {friend.goal}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Goal Days
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#244D3F]">
                {friend.next_due_date}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Next Due
              </p>
            </div>

          </div>

        
          <div className="bg-white p-5 rounded-2xl shadow">
            <div className="flex justify-between">
              <h2 className="text-[#244D3F]">Relationship Goal</h2>
              <button className="bg-[#E9E9E9] px-3 text-xs rounded-md">
                Edit
              </button>
            </div>
            <p className="text-sm mt-2">
              <span className="text-[#64748B]">Connect every</span>{" "}
              <span className="font-bold">30 days</span>
            </p>
          </div>

          <div className="bg-white rounded-xl text-center p-4">

            <h2 className="text-[#244D3F] text-[16px] py-5">
              Quick Check-In
            </h2>

            <div className="flex flex-wrap justify-center gap-4 pb-4">

              <ActionBtn type="Call" img={CallImg} />
              <ActionBtn type="Text" img={TextImg} />
              <ActionBtn type="Video" img={VideoImg} />

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;