import React from 'react'
import Image from 'next/image'
import about from "../../public/images/About1.png"

import about1 from "../../public/images/About2.png"

import about2 from "../../public/images/About3.png"
import { FaCheck } from 'react-icons/fa'
import AboutMbl from './AboutMbl'
const About = () => {
  return (
    <>
    
    <section className='hidden md:flex p-16 justify-between relative   py-12 bg-black'>

<div className=' flex flex-col p-2 py-2 relative w-1/2 absolute  '>
    <h2 className='text-orange-400'>
        about-us
    </h2>
    <h2 className='text-white mb-[120px] text-6xl  font-bold text-6xxl  '>
        <span className='text-orange-400'>We</span> Create The Best Food Product
    </h2>
    <div className='pt-4'>
    <p className='mt-[120px]  text-xl w-[100px] text-white absolute pt-8'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque voluptas fugiat. Incidunt ratione alias perspiciatis esse. Asperiores accusamus animi libero nostrum iure. Reprehenderit iure, ad nemo optio corrupti ea?
    </p>
    </div>
{/* point */}
<ul className=" text-white text-center md:text-left pt-8  w-1/2">
    <div className='pt-8'>    <div className='pt-8'>  <p className="flex items-center text-[14px] pt-8 md:text-[16px]">
<FaCheck className="text-center " />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p></div></div>
          <li className="flex items-center text-[14px] pt-8 md:text-[16px]">
            <FaCheck className="text-[#FF9F0D] mr-3" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-center text-[14px] pt-8 md:text-[16px]">
            <FaCheck className="text-[#FF9F0D] mr-3" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <button className="bg-orange-400 text-white w-1/8 pt-2   py-3 mt-[120px] rounded-[25px]">
          See More
        </button>


</div>

<div className='flex-col py-2 w-1/2'>
<Image src={about} alt=""/>
<div className='flex py-4 gap-3 '>
<Image src={about1} alt="" />

<Image src={about2} alt=""/>
</div>
</div>


    </section>
    
    
    
    <AboutMbl/>
    
    
    </>
  )
}

export default About