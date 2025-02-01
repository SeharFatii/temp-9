import React from 'react'
import Image from 'next/image'
import Navh from "../../public/images/HeroNav.png"
import { IoIosArrowForward } from "react-icons/io";


import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MenuMBLnav from '@/app/Menu/MenuMBLnav';

const icons=[<CiSearch key={1} className='hover:text-orange-400'/>,
<VscAccount key={2} className='hover:text-orange-400'/>,<HiOutlineShoppingBag key={3 }className='hover:text-orange-400'/>]
const MenuHero = () => {
  return (
    <>
    
    <div className="  ">
  <div className="  ">
<MenuMBLnav/>
  <header className=" hidden md:block text-white bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
  <h2 className='text-3xl text-white font-bold '><span className='text-orange-400'>Food</span>tuck</h2>
    <nav className="md:ml-auto text-2xl  md:mr-auto flex flex-wrap items-center  justify-center">
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Home</a>
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Menu</a>
      
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Blog</a>
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Pages</a>
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">About</a>
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Shop</a>
      
      <a className="mr-5 hover:underline hover:decoration-orange-400 hover:underline-offset-4">Contact</a>
    </nav>
    <div className='flex items-center gap-4 text-white text-3xl'> 
  {icons }


    </div>
  </div>
</header>






    
    
    <section className=" relative hidden md:flex flex-1 shrink-0 items-center justify-center rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* image - start */}
      <Image
        src={Navh}
        loading="lazy"
        alt="Photo by Fakurian Design"
        style={{height:'400px'}}
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