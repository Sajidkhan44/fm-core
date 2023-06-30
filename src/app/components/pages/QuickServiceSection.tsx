import Link from 'next/link'
import React from 'react'

export default function QuickServiceSection() {
  return (
    <div style={{background:"url(/banner2.jpg) no-repeat", backgroundSize:"cover"}} className="min-h-[80vh] lg:block flex items-center py-16 md:pl-24 pl-4 w-full ">
        <div className="lg:w-[40%] md:w-[80%] w-[98%] bg-white py-12 px-6  ">
            <h1 className="px-4 md:text-[2.5rem] text-[1.5rem] text-medium border-l-4 border-[#ffeb00]">Do you Need Help
With Electrical
Maintenance?</h1>
<p className="text-[#4e4e4e] text-[1rem] mt-6">Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!</p>
        <div className="mt-[50px]">
                <Link href="tel:9380304505" className='py-3 px-6 bg-[#ffeb00] hover:text-[#FFEB00] border hover:border border-[#ffeb00] hover:bg-white w-[30%]'>CALL US</Link>
        </div>
        </div>

    </div>
  )
}
