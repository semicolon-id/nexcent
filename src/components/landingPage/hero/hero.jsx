import React from "react";

import img from "../../../assets/component/landingPage/hero/img.png";

function lesson() {
  return (
    <div className="bg-[#F5F7FA] font-sans  pt-32">
      <div className="pl-[5%] pr-[5%]    py-14">
        <div className="flex">
          <div className="w-[70%] md:w-3/5 py-10    ">
            <span className="text-[#4D4D4D] text-2xl md:text-6xl font-semibold">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F] "><br className="hidden lg:block"/>from 8 years</span>
            </span>
            <p className="text-[#717171] my-4 text-sm md:text-base">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="bg-[#4CAF4F] text-white w-24  md:w-32  h-[50.49px] rounded mt-3">
              Register
            </button>
          </div>
          <div className="2/5  ">
            <img src={img} alt="" className="w-80 h-80" />
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-5 md:mt-14">
          <button className="rounded-full bg-[#4CAF4F] opacity-50 hover:opacity-100 w-2 h-2"></button>
          <button className="rounded-full bg-[#4CAF4F] opacity-50 hover:opacity-100 w-2 h-2"></button>
          <button className="rounded-full bg-[#4CAF4F] opacity-50 hover:opacity-100 w-2 h-2"></button>
        </div>
      </div>
    </div>
  );
}

export default lesson;
