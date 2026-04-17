import { useEffect, useState } from "react";
import CallImg from "../assets/call.png";
import TextImg from "../assets/text.png";
import VideoImg from "../assets/video.png";

const TimelinePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const getIcon = (type) => {
    if (type === "Call") return CallImg;
    if (type === "Text") return TextImg;
    if (type === "Video") return VideoImg;
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6">
      
      <h2 className="text-2xl font-semibold text-[#244D3F] mb-6">
        Timeline
      </h2>

      <div className="space-y-5">

        {timeline.length === 0 ? (
          <p className="text-gray-400">No activity yet</p>
        ) : (

          timeline.map((item, index) => (
            <div key={item.id} className="flex gap-4 items-start">

              {/* ICON */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src={getIcon(item.type)} className="w-5 h-5" />
                </div>

                {index !== timeline.length - 1 && (
                  <div className="w-[2px] h-10 bg-gray-300"></div>
                )}
              </div>

              {/* CONTENT */}
              <div className="bg-white shadow rounded-md px-4 py-2 w-full">

                {/* TITLE */}
                <p className="text-sm font-medium text-[#244D3F]">
                  {item.title}
                </p>

                {/* TIME */}
                <p className="text-xs text-gray-500 mt-1">
                  {item.time}
                </p>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default TimelinePage;