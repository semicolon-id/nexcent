import React from "react";

import people from "../../../assets/component/landingPage/helping/people.png";
import hands from "../../../assets/component/landingPage/helping/hands.png";
import tumb from "../../../assets/component/landingPage/helping/tumb.png";
import card from "../../../assets/component/landingPage/helping/card.png";

function helping() {
  return (
    <div className="bg-[#F5F7FA] font-sans ">
      <div className="pl-[5%] pr-[5%] md:flex py-14">
        <div className="md:w-2/5 text-center md:text-start  my-auto mb-2">
          <span className="text-[#4D4D4D] text-4xl font-semibold">
            Helping a local{" "}
            <span className="text-[#4CAF4F] ">
              <br className="hidden md:block" />
              business reinvent itself
            </span>
          </span>
          <p className="text-[#18191F] mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="md:w-[65%] lg:w-3/5    grid grid-cols-2 gap-10 md:pl-10 lg:pl-32 py-4 md:py-0 ">
          <div className="flex">
            <div className="my-auto">
              <img src={people} alt="" className="w-12 h-12" />
            </div>
            <div className="ml-4">
              <h1 className="text-[#4D4D4D] text-xl lg:text-3xl font-semibold">
                2,245,341
              </h1>
              <p className="text-[#717171] text-sm md:text-base">Members</p>
            </div>
          </div>

          <div className="flex">
            <div className="my-auto">
              <img src={hands} alt="" className="w-12 h-12" />
            </div>
            <div className="ml-4">
              <h1 className="text-[#4D4D4D] text-xl lg:text-3xl  font-semibold">46,328</h1>
              <p className="text-[#717171] text-sm md:text-base">Clubs</p>
            </div>
          </div>

          <div className="flex">
            <div className="my-auto">
              <img src={tumb} alt="" className="w-12 h-12" />
            </div>
            <div className="ml-4">
              <h1 className="text-[#4D4D4D] text-xl lg:text-3xl  font-semibold">828,867</h1>
              <p className="text-[#717171] text-sm md:text-base">Event Bookings</p>
            </div>
          </div>

          <div className="flex">
            <div className="my-auto">
              <img src={card} alt="" className="w-12 h-12" />
            </div>
            <div className="ml-4">
              <h1 className="text-[#4D4D4D] text-xl lg:text-3xl  font-semibold">
                1,926,436
              </h1>
              <p className="text-[#717171] text-sm md:text-base">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default helping;
