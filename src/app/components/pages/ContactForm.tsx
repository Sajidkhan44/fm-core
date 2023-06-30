"use client"


import React, { useRef } from 'react'

export default function ContactForm() {
    const contactForm = useRef(null)
  return (
    <div id="contact" ref={contactForm} className="w-full  py-[50px] px-6 ">
        <div className="text-center space-y-2">
                <p className="text-[1.125rem] font-medium text-[#ffeb00]">Contact Us</p>
                <h1 className="md:text-[3rem] text-[2rem] font-semibold">We are just a Phone call away</h1>
            </div>
            <div className="mt-[50px] py-12 px-6 grid lg:grid-cols-2 grid-cols-1 gap-8">
            <form  action="https://formsubmit.co/service.fmcore@gmail.com" method="POST" className="col-span-1 text-black space-y-3 lg:w-[60%] w-full m-auto">
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="Full_Name" className="text-[#4e4e4e]">Full Name <span className="text-red-500">*</span></label>
                    <input id='Full_Name' name='Full_Name' type="text" placeholder='Full Name' required className='w-full border border-purple-500 px-4 py-3 rounded-md' />
                </div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="Email" className="text-[#4e4e4e]">Email <span className="text-red-500">*</span></label>
                    <input id='Email' name='Email' type="email" placeholder='Email' required className='w-full border border-purple-500 px-4 py-3 rounded-md' />
                </div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="number" className="text-[#4e4e4e]">Contact Number <span className="text-red-500">*</span></label>
                    <input id='number' name='number' type="number" placeholder='Contact Number' required className='w-full border border-purple-500 px-4 py-3 rounded-md' />
                </div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="Purpose" className="text-[#4e4e4e]">Purpose of Contact <span className="text-red-500">*</span></label>
                    <input id='Purpose' name='Purpose' type="text" placeholder='Purpose of Contact' required className='w-full border border-purple-500 px-4 py-3 rounded-md' />
                </div>
                <div className="flex flex-col space-y-2 ">
                    <label htmlFor="message" className="text-[#4e4e4e]">Message <span className="text-red-500">*</span></label>
                    <textarea id='message' name='message' type="text" placeholder='Message' required className='w-full border border-purple-500 px-4 py-3 rounded-md' />
                </div>
                    <button type='submit' className='px-6 py-2 w-[30%] font-medium text-[0.8rem] text-white bg-purple-600 hover:bg-purple-500'>SUBMIT</button>
            </form>

        <div className="col-span-1 w-full ">
            <img src="/3d2.jpg" alt="" className="w-full h-full cover" />
        </div>
            </div>

    </div>
  )
}
