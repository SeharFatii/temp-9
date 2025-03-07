
'use client';

import React from 'react';

import Image from 'next/image';
import hero from "../../public/images/Hero.png"
import HeroMbl from './HeroMbl';
import {motion} from 'framer-motion'



const Hero = () => {
  return (
    <>
    <section className='p-16 hidden md:flex    justfiy-center bg-black '>
        <motion.div className='flex-col p-8   '   
        
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        
        
        
<h2 className='font-satisfy text-4xl text-orange-400  px-8'> {' '}Its Quick&<span>amuzing</span></h2>
<h2 className='text-6xl text-white py-2 font-bold w-[520px]'>
   <span className='text-orange-400'> Th</span>e Art of speed Food Quality
</h2>

<p className='pt-8 text-white w-[520px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis aut consequatur voluptatem cumque quo sint modi consequuntur rem! Facilis autem, nisi repellendus earum dignissimos ex ab numquam iure perspiciatis.</p>
    <button className='px-8 py-3 mt-[40px] rounded-[25px] text-xl text-white bg-orange-400'>see More</button>
        </motion.div>
        <Image src={hero} alt=""/>
        
        
        
        
        </section>
        <HeroMbl/></>
  );
};

export default Hero;
