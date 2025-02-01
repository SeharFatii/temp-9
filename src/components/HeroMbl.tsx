import React from 'react'

import Image from 'next/image';
import hero from "../../public/images/Hero.png"



const HeroMbl = () => {
  return (
    <>
    <section className=' flex md:hidden flex-col   justfiy-center bg-black '>
        <div className='flex-col p-2 '>
<h2 className='font-satisfy text-2xl text-orange-400  px-4'> {' '}Its Quick&<span>amuzing</span></h2>
<h2 className='text-3xl text-white px-2 py-2 font-bold w-[320px]'>
   <span className='text-orange-400'> Th</span>e Art of speed Food Quality
</h2>

<p className='pt-8 text-white w-[280px] text-[10px] w-[300px] px-8 text-lg pl-2 ml-2 mr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis aut consequatur voluptatem cumque quo sint modi consequuntur rem! Facilis autem, nisi repellendus earum dignissimos ex ab numquam iure perspiciatis.</p>
    <button className='px-4 py-2 mt-[40px] rounded-[25px] text-xl text-white bg-orange-400 ml-4'>see More</button>
        </div>
        <Image src={hero} alt=""/>
        
        
        
        
        </section></>
  )
}

export default HeroMbl