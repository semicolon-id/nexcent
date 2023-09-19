import React from "react";

import img from "../../../assets/component/landingPage/tesla/img.png";
import logo1 from "../../../assets/component/landingPage/tesla/Logo1.png";
import logo2 from "../../../assets/component/landingPage/tesla/Logo2.png";
import logo3 from "../../../assets/component/landingPage/tesla/Logo3.png";
import logo4 from "../../../assets/component/landingPage/tesla/Logo4.png";
import logo5 from "../../../assets/component/landingPage/tesla/Logo5.png";
import logo6 from "../../../assets/component/landingPage/tesla/Logo6.png";

function tesla() {
  return (
    <div className="bg-[#F5F7FA] font-sans py-10">
    <div className="pl-[5%] pr-[5%] md:flex justify-between  ">
      <div className="md:2/5">
        <img src={img} alt="" className="w-44 h-44 md:w-96 md:h-96 float-left md:float-none mr-3 md:-mr-0" />
      </div>

      <div className="md:w-3/5  lg:pr-24">
        <p className="text-[#717171] my-4 text-sm md:text-base">
          “We have enjoyed working with the JustGo system to setup and go live
          with our new membership platform. The initial effort to organise it
          along the lines of how our sport currently works was quick and
          relatively easy. The new system has already massively improved the
          time and effort it takes to setup and process member and club
          applications. It will help us to communicate with people in our sport
          in a much more effective way, and collect data to help us improve how
          our sport is governed.”
        </p>
        <p className="text-[#4CAF4F]  md:my-3 text-lg md:text-xl font-semibold">Tim Smith</p>
        <p className="text-[#89939E] text-sm md:text-base">
          British Dragon Boat Racing Association
        </p>

        <div className="lg:flex lg:justify-between mt-4 md:mt-10 md:hidden">
          <div className="flex justify-between gap-6 md:gap-12 my-auto mb-3 md:mb-0">
            <img src={logo1} alt="" className="w-8 h-8 md:mr-" />
            <img src={logo2} alt="" className="w-8 h-8" />
            <img src={logo3} alt="" className="w-8 h-8" />
            <img src={logo4} alt="" className="w-8 h-8" />
            <img src={logo5} alt="" className="w-8 h-8" />
            <img src={logo6} alt="" className="w-8 h-8" />
          </div>
          <div className=" w-80 md:w-60 text-center md:text-end mt-5 md:mt-0 lg:-mr-10" >
            <a href="# " className="text-[#4CAF4F]   my-3 text-md md:text-xl font-semibold">
              <span>Meet all customers →</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="  md:mt-10   hidden md:block lg:hidden ">
          <div className="flex ml-48 gap-10 mb-3 md:mb-0">
            <img src={logo1} alt="" className="w-8 h-8 md:mr-" />
            <img src={logo2} alt="" className="w-8 h-8" />
            <img src={logo3} alt="" className="w-8 h-8" />
            <img src={logo4} alt="" className="w-8 h-8" />
            <img src={logo5} alt="" className="w-8 h-8" />
            <img src={logo6} alt="" className="w-8 h-8" />
          </div>
          <div className="w-full text-center  mt-3 " >
            <a href="# " className="text-[#4CAF4F]   my-3 text-md md:text-xl font-semibold">
              <span>Meet all customers →</span>
            </a>
          </div>
        </div>
    </div>
  );
}

export default tesla;
