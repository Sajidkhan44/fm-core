import { faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'
import React from 'react'

export default function Footer() {


  return (
<div className="w-full   py-[56px] bg-[#333] flex flex-col relative items-center overflow-hidden">
    <div className=" md:w-[90%] w-[95%] h-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 border-b border-white  py-[50px]">
    <div className="md:col-span-2 col-span-1 p-4 w-full text-white h-full flex flex-col space-y-10">  
      <div className="w-[20%]">
        <img src="/logo4.svg" alt="" className="" />
      </div>
      <h1 className="text-[24px] font-semibold">Ready to Move Forward and Get the Latest Insights.</h1>
      <div className="lg:w-[80%] w-full flex relative h-[65px]">
      <input type="text" placeholder='Enter Your Email' className="h-full px-4 text-black text-[18px] font-medium rounded-lg outline-none w-full" />
      <button  className=' absolute bg-[#ff4b3f]  rounded-lg p-4 right-[0.5%] top-[50%] -translate-x-[0.5%] -translate-y-[50%] '><FontAwesomeIcon className='w-[25px] h-[25px] newsletter' icon={faPaperPlane} /> </button>
      </div>
      <div className="flex gap-5 flex-row justify-start items-center space-x-4 py-3">
                      <Link href="">
                        <FontAwesomeIcon
                          className="h-[30px] h-[30px]"
                          icon={faLinkedin}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-white h-[30px] h-[30px]"
                          icon={faFacebookF}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-white h-[30px] h-[30px]"
                          icon={faTwitter}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-white h-[30px] h-[30px]"
                          icon={faInstagram}
                        />
                      </Link>
                    </div>
    </div>
    <div className="col-span-1 md:text-start text-center text-white p-4 w-full">
      <h1 className="text-[28px] font-semibold">Company Links</h1>
      <ul className="mt-[30px] text-[15px] space-y-4 text-[#e4e3e3]">
        <li className=""><Link href="">About Us </Link> </li>
        <li className=""><Link href="">Contact Us </Link> </li>
        <li className=""><Link href="">Gallery </Link> </li>
        <li className=""><Link href="">Our Services </Link> </li>
      </ul>
    </div>
    <div className="col-span-1 md:text-start text-center text-white p-4 w-full">
      <h1 className="text-[28px] font-semibold">Adress</h1>
      <ul className="mt-[30px] text-[15px] space-y-4 text-[#edebeb]">
        <li className=""><Link  href="">Industrial Area Shop 103 </Link> </li>
        <li className=""><Link  href="">Dam Road</Link> </li>
        <li className=""><Link  href="">Beside Kemps Minerals </Link> </li>
      </ul>
    </div>
    </div>
    <div className="lg:w-[85%] md:w-[90%] w-[95%] h-full mx-auto flex p-4 text-[18px] text-white justify-between items-center">
      <h1 className="">© 2022 All Rights Reserved By Separate web</h1>
      <div className="space-x-4 text-[#e8e8e8]">
        <Link href="" className="">Sitemap</Link>
        <Link href="" className="">Terms of Use</Link>
        <Link href="" className="">Privacy Policy</Link>
      </div>
    </div>
</div>
  )
}
