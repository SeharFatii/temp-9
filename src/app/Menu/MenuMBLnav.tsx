import React from 'react'
import Image from 'next/image'
import Navh from "../../../public/images/HeroNav.png"
import { IoIosArrowForward } from "react-icons/io";




const icons=[<CiSearch className='hover:text-orange-400'/>,
<VscAccount className='hover:text-orange-400'/>,<HiOutlineShoppingBag className='hover:text-orange-400'/>]

import { RiMenu3Fill } from "react-icons/ri";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Link from 'next/link'

import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
const MenuMBLnav = () => {
  return (
    <>
    <section className='bg-black pt-2 pb-2'>
    <Sheet >
  <SheetTrigger className='flex md:hidden bg-pink-400 hover:text-yellow-400 text-white ml-8 mt-2'><RiMenu3Fill/></SheetTrigger>
  <SheetContent className='bg-gray-700'>
    <SheetHeader >
      <SheetTitle className=' font-bold text-yellow-400'>Menu</SheetTitle>
      <SheetDescription>

      <nav className=" flex-col flex  py-2 font-bold text-xl pb-4 ml-6 w-auto">

<Link
  href="/"
  className=" pb-2 text-white px-8 hover:shadow-md hover:cursor-pointer hover:bg-yellow-400 decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Home
</Link>
<Link
  href="/Menu"
  className=" pb-2 text-white hover:cursor-pointer hover:bg-yellow-400  text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Menu
</Link>
<Link
  href="/Blogs"
  className="pb-2 text-white hover:cursor-pointer hover:bg-yellow-400  text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Pages
</Link>
<Link
  href="/OurChef"
  className=" pb-2 text-white hover:cursor-pointer hover:bg-yellow-400 text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Blogs
</Link>
<Link
  href="/BlogDetails"
  className=" text-white pb-2 hover:cursor-pointer hover:bg-yellow-400  text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  About
</Link>
<Link
  href="/OurShop"
  className=" text-white pb-2 hover:cursor-pointer hover:bg-yellow-400 text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Shop
</Link>
<Link
  href="/Sign"
  className="mr-5 text-white pb-2 hover:cursor-pointer  text-white px-8 hover:shadow-md hover:bg-yellow-400 decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Contact
</Link>

</nav>
      


      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  
  <div className='flex md:hidden items-center gap-2 text-white text-xl ' style={{marginLeft:'280px', marginTop:'-20px'}}> 
  {icons }


    </div>
    
</Sheet>
</section>
    



    {/* heroIMAGE */}


    <section className="relative flex md:hidden flex-1 items-center justify-center rounded-lg bg-gray-100 py-12 shadow-lg sm:py-16 md:py-20 xl:py-48">
  {/* Image - Start */}
  <Image
    src={Navh}
    loading="lazy"
    alt="Photo by Fakurian Design"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  {/* Image - End */}

  {/* Overlay - Start */}
  <div className="absolute inset-0 bg-black opacity-40" />
  {/* Overlay - End */}

  {/* Text - Start */}
  <div className="relative flex flex-col items-center px-4 sm:max-w-xl">
    <h1 className="mb-6 text-center text-3xl font-bold text-white sm:text-4xl md:mb-8 md:text-5xl xl:text-6xl">
      Our Menu
    </h1>

    <div className="flex flex-wrap items-center text-white text-lg sm:text-xl sm:flex-row sm:gap-2">
      <h2>Home</h2>
      <IoIosArrowForward className=" sm:block" />
      <h2 className="text-yellow-400 hover:underline">Menu</h2>
    </div>
  </div>
  {/* Text - End */}
</section>










    </>
  )
}

export default MenuMBLnav