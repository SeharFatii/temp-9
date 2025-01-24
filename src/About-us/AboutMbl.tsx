import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import about from "../../public/images/About1.png"

import about1 from "../../public/images/About2.png"

import about2 from "../../public/images/About3.png"
import { Satisfy } from 'next/font/google'

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--satisfy',
  weight: '400',
});
const AboutMbl = () => {
  return (
    <>
    
    <section className='block md:hidden p-2 justify-between relative   py-12 bg-black'>

<div className=' block  p-2 relative  '>
    <h2 className='text-orange-400 font-satisfy text-2xl ml-2'>
      
        about-us
    </h2>
    <h2 className='text-white mb-[120px] text-4xl  font-bold ml-2  '>
        <span className='text-orange-400'>We</span> Create The Best Food Product
    </h2>
    <p className='mt-[120px]  text-xl w-[100px] text-white ml-2'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque voluptas fugiat. Incidunt ratione alias perspiciatis esse. Asperiores accusamus animi libero nostrum iure. Reprehenderit iure, ad nemo optio corrupti ea?
    </p>
{/* point */}
<ul className="ml-[10%] text-white text-center  mt-6 space-y-2">
          <li className="flex items-center text-base  pt-4 ml-2">
            <FaCheck className="text-center text-orange-400 mr-3 " />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-center text-[14px] md:text-[16px]">
            <FaCheck className="text-[#FF9F0D] mr-3" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-center text-[14px] md:text-[16px]">
            <FaCheck className=" mr-3" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <button className="bg-orange-400 text-white w-1/4 px-4 py-3 mt-[120px] rounded-[20px] ml-4">
          See More
        </button>
        


</div>


<div className='flex-col px-2 py-2 mt-[120px] '>
<Image src={about} alt="" width={360} height={120}  className='rounded-[25px]  px-2'/>
<div className='flex py-4 space-between '>
<Image src={about1} alt=""  width={150} height={120} className='rounded-[15px]  px-2'/>

<Image src={about2} alt="" width={150} height={120} className='rounded-[15px]  px-2'/>
</div>
</div>


    </section>
    
    
    </>
  )
}

export default AboutMbl