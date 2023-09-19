import React, { useState, Fragment } from "react";
import logo from "../../../assets/component/UI/navbar/Icon.png";
import Nex from "../../../assets/component/UI/navbar/Nexcent.png";
// import Vektor from "../../../assets/component/UI/navbar/Vector.png";

const Navbar = () => {
  let [open, setopen] = useState(false);

  //   const navigate = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Community", link: "/community" },
    { name: "Blog", link: "/blog" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <Fragment>
      <div className="border-2 w-full fixed top-0 right-0 left-0 z-50  ">
        <div className="lg:flex items-center justify-between w-full bg-white pt-2  pr-[10%] pl-[10%]">
          <div className="flex mt-3">
            <a
              className="font-bold text-2xl cursor-pointer h-full flex items-center pb-5 font-inter  text-gray-800"
              href="/"
            >
              <img src={logo} alt="logo" className="" />
            </a>
            <img src={Nex} alt="" className="h-4 ml-2" />
          </div>
          <div
            onClick={() => setopen(!open)}
            className="text-3xl absolute right-7 bottom-2 rounded-lg cursor-pointer lg:hidden  text-primary pt-1 px-1"
          >
            <span className="text-[#4CAF4F]  pt-10">
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </span>
          </div>
          <div className="  ">
            <ul
              className={`-z-20 lg:flex  lg:items-center font-poppins lg:pb-2 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-0" : " left-[120%]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="hover:underline font-inter text-[##4D4D4D] underline-offset-8 transition-all duration-400 lg:ml-8 text-sm lg:text-sm font-medium lg:my-0 my-7 "
                >
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className=" bg-[#4CAF4F]  md:ml-7 w-36 rounded-md">
                <button className="bg-primary text-sm px-5 py-2 rounded-full text-white">
                  Register Now →
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
