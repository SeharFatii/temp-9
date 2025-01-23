import React from 'react'
import Image from 'next/image'
import Navh from "../../public/images/HeroNav.png"
import { IoIosArrowForward } from "react-icons/io";
const MenuHero = () => {
  return (
    <>
    
    <div className="  ">
  <div className="  ">
    
    
    <section className=" relative flex flex-1 shrink-0 items-center justify-center rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* image - start */}
      <Image
        src={Navh}
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* image - end */}
      {/* overlay - start */}
      <div className="absolute " />
      {/* overlay - end */}
      {/* text start */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Our Menu
        </h1>
        <div className="flex w-full text-white text-2xl flex-col gap-2.5 sm:flex-row sm:justify-center">
         <h2>Home </h2>
         <h2><IoIosArrowForward/></h2>
          <h2 className='text-yellow-400 hover:underline'>Menu</h2>
        </div>
      </div>
      {/* text end */}
    </section>
  </div>
</div>

    
    </>
  )
}

export default MenuHero