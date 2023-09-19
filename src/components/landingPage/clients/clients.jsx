import React from 'react'

import logo1 from "../../../assets/component/landingPage/clients/Logo1.png"
import logo2 from "../../../assets/component/landingPage/clients/Logo2.png"
import logo3 from "../../../assets/component/landingPage/clients/Logo3.png"
import logo4 from "../../../assets/component/landingPage/clients/Logo4.png"
import logo5 from "../../../assets/component/landingPage/clients/Logo5.png"
import logo6 from "../../../assets/component/landingPage/clients/Logo6.png"


function clients() {
  return (
    <div className='pl-[5%] pr-[5%] py-10 font-sans '>
      <div className='text-center'>
        <h1 className='text-[#4D4D4D] font-bold text-3xl'>Our Clients</h1>
        <p className='text-[#717171] '>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className='grid grid-cols-4 md:grid-cols-7 px-5 mt-10'>
        <img src={logo1} alt="" className='w-12 h-12'/>
        <img src={logo2} alt="" className='w-12 h-12' />
        <img src={logo3} alt="" className='w-12 h-12' />
        <img src={logo4} alt="" className='w-12 h-12' />
        <img src={logo5} alt="" className='w-12 h-12' />
        <img src={logo6} alt="" className='w-12 h-12' />
        <img src={logo3} alt="" className='w-12 h-12' />
      </div>
    </div>
  )
}

export default clients