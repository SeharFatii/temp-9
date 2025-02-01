
'use client';

import React from 'react'



import { Satisfy } from 'next/font/google';
import SSt from './SSt';
import MblChef from './MblChef';


const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--satisfy',
  weight: '400',
});

const page = () => {
  return (
    
    
    <>
    
    <section className='hidden md:block bg-black text-white pt-8'>
<div className=' justify-center items-center'>
<h2 className='font-satisfy pt-8 text-orange-400 text-2xl justify-center items-center flex'>Our Chef</h2>
<h2 className='text-6xl font-bold text-white flex justify-center items-center'>
   <span className='text-orange-400'> Me</span>et Our Chef
</h2>





</div>
<SSt/>
<div className='flex justify-center pt-8  hover:underline hover:text-white  items-center pt-8' style={{marginTop:'8px'}}>
<button className='bg-transparent pt-8 py-4 pb-8 border-solid border-orange-400 flex  justify-center border-[5px] items-center px-8 rounded-[25px] w-[290px] text-orange-400 font-bold text-2xl' 
style={{borderColor:'orange',borderWidth:'5px',borderStyle:'solid',paddingTop:'8px',paddingBottom:'8px',paddingLeft:'8px',paddingRight:'8px',borderRadius:'25px',width:'290px',fontSize:'20px',fontWeight:'bold',color:'orange'}}>
see more</button>
</div>


    </section>
    
    
    <MblChef/>
    
    
    
    
    
    </>
  )
}

export default page