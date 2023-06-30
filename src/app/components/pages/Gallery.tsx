"use client"


import React, { useRef } from 'react'

export default function Gallery() {
    const gallery = useRef(null)
  return (
    <div id="gallery" ref={gallery} className="w-full min-h-[80vh] py-[50px] bg-[#f2f2f7]">
            <div className="text-center space-y-2">
                <p className="text-[1.125rem] font-medium text-[#ffeb00]">GALLERY</p>
                <h1 className="md:text-[3rem] text-[2rem] font-semibold">A motor winding shop for challenging new windings</h1>
            </div>
            <div className="mt-[50px] w-[85%] mx-auto grid md:grid-cols-2 gap-2">
                <div className="w-full overflow-hidden col-span-1">
                    <img src="g1.webp" alt="" className="w-full hover:scale-110 duration-1000 ease-linear h-full object-cover" />
                </div>
                <div className="w-full overflow-hidden col-span-1">
                    <img src="g2.webp" alt="" className="w-full hover:scale-110 duration-1000 ease-linear h-full object-cover" />
                </div>
                <div className="w-full overflow-hidden col-span-1">
                    <img src="g3.webp" alt="" className="w-full hover:scale-110 duration-1000 ease-linear h-full object-cover" />
                </div>
                <div className="w-full overflow-hidden col-span-1">
                    <img src="g4.webp" alt="" className="w-full hover:scale-110 duration-1000 ease-linear h-full object-cover" />
                </div>

            </div>
            </div>
  )
}
