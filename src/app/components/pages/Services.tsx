"use client"

import React, { useRef } from 'react'

export default function Services() {

  const servicesRef = useRef(null)
  return (
    <div id="services" ref={servicesRef} className="w-full min-h-[80vh] py-[50px]">
            <div className="text-center space-y-2">
                <p className="text-[1.125rem] font-medium text-[#ffeb00]">VALUED SERVICES</p>
                <h1 className="md:text-[3rem] text-[2rem] font-semibold">Outstanding Industrial & Commercial Services</h1>
            </div>
            <div className="mt-[50px] p-4 w-[90%] grid lg:grid-cols-2 gap-8 mx-auto">
              <div className="col-span-1 max-w-full">
                <img src="about.webp" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="">
                <p className="text-[1rem] text-[#4e4e4e]">We offers a total range of machine shop and motor rewinding services for electric motors of all sizes. We’re an industry-leading partner focused on getting your motor back up and running so your operations can minimize downtime and get back to profitability.</p>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 mt-[50px]">
                  <div className="hover:bg-[#ffeb00] transition-all ease-in duration-300 group ">
                    <div className="border-b-4 border-[#ffeb00] h-[120px] overflow-hidden">
                      <img src="i1.webp" alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-linear" />
                    </div>
                    <div className="p-2 space-y-2">
                      <h1 className="text-[1rem] font-semibold group-hover:text-white "> Full load test field </h1>
                      <p className="text-[0.8rem] text-[#4e4e4e] font-medium group-hover:text-white">Up to 13,8 kV, 2.300 kVA continuous duty, 120 Hz</p>
                    </div>
                  </div>
                  <div className="hover:bg-[#ffeb00] transition-all ease-in duration-300 group ">
                    <div className="border-b-4 border-[#ffeb00] h-[120px] overflow-hidden">
                      <img src="i2.webp" alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-linear" />
                    </div>
                    <div className="p-2 space-y-2">
                      <h1 className="text-[1rem] font-semibold group-hover:text-white ">  Modifications and alterations </h1>
                      <p className="text-[0.8rem] text-[#4e4e4e] font-medium group-hover:text-white">Custom-build electric motors, modifications, adaptions, and re-design</p>
                    </div>
                  </div>
                  <div className="hover:bg-[#ffeb00] transition-all ease-in duration-300 group ">
                    <div className="border-b-4 border-[#ffeb00] h-[120px] overflow-hidden">
                      <img src="i3.webp" alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-linear" />
                    </div>
                    <div className="p-2 space-y-2">
                      <h1 className="text-[1rem] font-semibold group-hover:text-white ">   Replicas and replacements </h1>
                      <p className="text-[0.8rem] text-[#4e4e4e] font-medium group-hover:text-white">Reproduction of existing motors with exact identical dimensions and mounting </p>
                    </div>
                  </div>
                  <div className="hover:bg-[#ffeb00] transition-all ease-in duration-300 group ">
                    <div className="border-b-4 border-[#ffeb00] h-[120px] overflow-hidden">
                      <img src="i4.webp" alt="" className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-linear" />
                    </div>
                    <div className="p-2 space-y-2">
                      <h1 className="text-[1rem] font-semibold group-hover:text-white ">    Overhauling and reconditioning </h1>
                      <p className="text-[0.8rem] text-[#4e4e4e] font-medium group-hover:text-white">Modernization and retrofit of existing electric motors </p>
                    </div>
                  </div>
              </div>
              </div>
            </div>
    </div>
  )
}
