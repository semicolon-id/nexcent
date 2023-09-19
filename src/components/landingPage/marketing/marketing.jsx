import React from "react";

import img1 from "../../../assets/component/landingPage/marketing/img1.png";
import img2 from "../../../assets/component/landingPage/marketing/img2.png";
import img3 from "../../../assets/component/landingPage/marketing/img3.png";

function marketing() {
  return (
    <div className="pl-[5%] pr-[5%] font-sans pt-12 pb-20 md:pb-44">
      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto md:mb-5">
        <h1 className="text-[#4D4D4D] text-4xl font-semibold mb-2">
          Caring is the new marketing
        </h1>
        <p className="text-[#717171] my-5 md:-my-0">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      <div className="md:flex md:justify-between gap-2 lg:gap-24">
        <div className="md:w-1/3 relative">
          {/* <!-- img --> */}
          <img src={img1} alt="" className="mx-auto w-full" />

          {/* <!-- card --> */}
          <div className="absolute left-5 top-32 lg:top-52 lg:left-8 w-[85%] mx-auto p-4 text-center rounded-md bg-[#F5F7FA] shadow-lg pb-7">
            <h1 className="text-[#717171] text-md lg:text-xl font-semibold mb-4">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <a href="# " className="text-[#4CAF4F] text-md lg:text-2xl font-semibold">
              Readmore →
            </a>
          </div>
        </div>

        <div className="md:w-1/3 relative my-14 md:my-0">
          {/* <!-- img --> */}
          <img src={img2} alt="" className="mx-auto w-full" />

          {/* <!-- card --> */}
          <div className="absolute left-5 top-32 lg:top-52 w-[85%] mx-auto p-4 text-center rounded-md bg-[#F5F7FA] shadow-lg pb-7">
            <h1 className="text-[#717171] text-md lg:text-xl font-semibold mb-4">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h1>
            <a href="# " className="text-[#4CAF4F] text-md lg:text-2xl font-semibold">
              Readmore →
            </a>
          </div>
        </div>

        <div className="md:w-1/3 relative">
          {/* <!-- img --> */}
          <img src={img3} alt="" className="mx-auto w-full" />

          {/* <!-- card --> */}
          <div className="absolute left-5 top-32 lg:top-52  w-[85%] mx-auto p-4 text-center rounded-md bg-[#F5F7FA] shadow-lg pb-7">
            <h1 className="text-[#717171] text-md lg:text-xl font-semibold mb-4">
              Revamping the Membership Model with Triathlon Australia{" "}
            </h1>
            <a href="# " className="text-[#4CAF4F] text-md lg:text-2xl font-semibold">
              Readmore →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default marketing;
