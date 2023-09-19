import React from "react";

import img from "../../../assets/component/landingPage/theUnseen/img.png";

function TU() {
  return (
    <div className="pl-[5%] pr-[5%] md:flex justify-between  py-14 font-sans ">
      <div className="md:2/5">
        <img src={img} alt="" className="w-96 h-96" />
      </div>

      <div className="md:w-3/5 md:py-16   ld:pr-24">
        <h1 className="text-[#4D4D4D] text-4xl font-semibold">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-[#717171] my-4 ">
          When joining the JustGo Community, your success becomes our success.
          In other words, our Customer Success team will be on hand from day one
          to ensure we understand your requirements, share your goals and work
          with you for a smooth adoption of our software.
        </p>
        <button className="bg-[#4CAF4F] text-white  w-32  h-[36.49px] rounded mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default TU;
