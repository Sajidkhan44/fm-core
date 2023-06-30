"use client"
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'

export default function ServicesCards() {
  const aboutRef = useRef(null)
  return (
    <div id="about"  className='lg:w-[70%] md:w-[98%] w-[90%] grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto'>
         <div style={{boxShadow:"0px 14px 22px 0px rgba(204, 204, 204, 0.25)"}} className=" p-6 bg-white space-y-3 shadow-md  min-h-[250px] flex flex-col justify-between items-center text-center">
            <h1 className="text-[1.125rem] font-medium">Transformer Services</h1>
            <p className="text-[0.8rem] text-center  text-[#4e4e4e] ">Motor repair services disassemble and clean motors, assess them for damage, and then repair or replace parts. Reassembly is also required. Depending on a motor’s construction and condition, rewinding</p>
        <button className=' px-6 py-2 mt-3 text-[0.9rem] bg-[#ffeb00]  w-[max-content] text-white border  border-[#ffeb00] '>CONTACT US <FontAwesomeIcon className='ml-2' icon={faChevronCircleRight} /></button>
        </div>
        <div style={{boxShadow:"0px 14px 22px 0px rgba(204, 204, 204, 0.25)"}} className=" p-6 bg-white space-y-3 shadow-md  min-h-[250px] flex flex-col justify-between items-center text-center">
            <h1 className="text-[1.125rem] font-medium">Motor Services</h1>
            <p className="text-[0.8rem] text-center  text-[#4e4e4e] ">Approvals From Electrical Inspectorate
Overhauling & Repairs of Transformers
All Types of Electrical Erection Works
Relays Testing, Earthpit Testing & Renovation
AB Switch Servicing</p>
        <button className=' px-6 py-2 mt-3 text-[0.9rem] bg-[#ffeb00] w-[max-content] border  text-white border-[#ffeb00] '>CONTACT US <FontAwesomeIcon className='ml-2' icon={faChevronCircleRight} /></button>
        </div> 
        <div style={{boxShadow:"0px 14px 22px 0px rgba(204, 204, 204, 0.25)"}} className=" p-6 bg-white space-y-3 shadow-md  min-h-[250px] flex flex-col justify-between items-center text-center">
            <h1 className="text-[1.125rem] font-medium">Industrials Services</h1>
            <p className="text-[0.8rem] text-center  text-[#4e4e4e]  tracking-tight">
We Give On spot Services and Testing of Equipments and Commissioning</p>
        <button className=' px-6 py-2 mt-3 text-[0.9rem] bg-[#ffeb00] w-[max-content] border  text-white border-[#ffeb00] '>CONTACT US <FontAwesomeIcon className='ml-2' icon={faChevronCircleRight} /></button>
        </div>
    </div>
  )
}
