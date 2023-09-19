import React from "react";

import img from "../../../assets/component/landingPage/how/pana.png";

function How() {
  return (
    <div className="pl-[5%] pr-[5%] md:flex justify-between py-18 md:py-14 font-sans ">
      <div className="md:2/5">
        <img src={img} alt="" className="w-96 h-96" />
      </div>

      <div className="md:w-3/5 py-10 md:py-16   lg:pr-24">
        <h1 className="text-[#4D4D4D] text-4xl font-semibold">
          How to design your site footer like we did
        </h1>
        <p className="text-[#717171] my-4 ">
          One event calendar shared across National, Regional and Club events to
          simplify your event experience. Allowing you to create waiting lists,
          share data capture, issue credential for course completion, apply
          smart purchasing rules and much more.
        </p>
        <button className="bg-[#4CAF4F] text-white  w-32  h-[36.49px] rounded mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default How;
