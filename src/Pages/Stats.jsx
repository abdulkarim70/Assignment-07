import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#7c3aed", "#1f3d2b", "#22c55e"];

const Stats = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    let call = 0;
    let text = 0;
    let video = 0;

    timeline.forEach((item) => {
      if (item.type === "Call") call++;
      if (item.type === "Text") text++;
      if (item.type === "Video") video++;
    });

    const total = call + text + video;

    setChartData([
      { name: "Text", value: total ? (text / total) * 100 : 0 },
      { name: "Call", value: total ? (call / total) * 100 : 0 },
      { name: "Video", value: total ? (video / total) * 100 : 0 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-10 sm:py-12">

   
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 text-center sm:text-left">
        Friendship Analytics
      </h1>

     
      <div className="bg-white rounded-2xl shadow-md p-5 sm:p-8 max-w-4xl mx-auto">

        <h2 className="text-green-800 font-semibold mb-6 text-center sm:text-left">
          By Interaction Type
        </h2>

       
        <div className="flex flex-col items-center justify-center">

          <div className="w-full max-w-[280px] sm:max-w-[320px] h-[260px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

       
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Text
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#1f3d2b] rounded-full"></span>
              Call
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Video
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;