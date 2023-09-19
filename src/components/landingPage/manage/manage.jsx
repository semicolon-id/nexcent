import React from "react";

import people from "../../../assets/component/landingPage/manage/people.png";
import building from "../../../assets/component/landingPage/manage/building.png";
import hands from "../../../assets/component/landingPage/manage/hands.png";

function manage() {
  return (
    <div className="pl-[5%] pr-[5%] font-sans py-10">
      <div className="text-center md:w-1/2 lg:w-[45%] mx-auto mb-5 md:mb-10">
        <h1 className="text-[#4D4D4D] text-4xl font-semibold mb-2">
          Manage your entire community in a single system
        </h1>
        <p className="text-[#717171] ">Who is Nextcent suitable for?</p>
      </div>

      <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-4 lg:gap-32">
        <div className="md:w-full  sm:w-full text-center shadow-lg rounded-md p-3">
          <div className="ml-[137px] md:ml-24 lg:ml-32 mb-1 relative mt-3">
            <div className="relative w-12 h-12 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-[#E8F5E9] "></div>
            <div className="absolute top-1  -left-3 ">
              <img src={people} alt="" className="w-10 h-7" />
            </div>
          </div>

          <div className=" mb-4">
            <h1 className="text-[#4D4D4D] text-3xl lg:text-4xl font-bold my-4 ">
              Membership Organisations
            </h1>
            <p className="text-[#717171] text-sm lg:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>

        <div className="md:w-full  sm:w-full text-center shadow-lg rounded-md p-3">
          <div className="ml-[137px] md:ml-24 lg:ml-32 mb-1 relative mt-3">
            <div className="relative w-12 h-12 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-[#E8F5E9] "></div>
            <div className="absolute top-1  -left-3 ">
              <img src={building} alt="" className="w-10 h-7" />
            </div>
          </div>

          <div className=" mb-4">
            <h1 className="text-[#4D4D4D] text-3xl lg:text-4xl font-bold my-4">
              National Associations
            </h1>
            <p className="text-[#717171] text-sm lg:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>

        <div className="md:w-full sm:w-full text-center shadow-lg rounded-md p-3">
          <div className="ml-[137px] md:ml-24 lg:ml-32 mb-1 relative mt-3">
            <div className="relative w-12 h-12 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm bg-[#E8F5E9] "></div>
            <div className="absolute top-1  -left-3 ">
              <img src={hands} alt="" className="w-10 h-7" />
            </div>
          </div>

          <div className=" mb-4">
            <h1 className="text-[#4D4D4D] text-3xl lg:text-4xl font-bold my-4">
              Clubs And Groups
            </h1>
            <p className="text-[#717171] text-sm lg:text-base">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default manage;
