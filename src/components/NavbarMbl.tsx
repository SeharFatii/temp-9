
import React from 'react'


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
  
const NavbarMbl = () => {
  return (
    <>
    <Sheet >
  <SheetTrigger className='flex md:hidden bg-pink-400 hover:text-yellow-400 text-white'><RiMenu3Fill/></SheetTrigger>
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
  href="/MenuPage"
  className=" pb-2 text-white hover:cursor-pointer hover:bg-yellow-400  text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Menu
</Link>
<Link
  href="/Blogs"
  className="pb-2 text-white hover:cursor-pointer hover:bg-yellow-400  text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Blog
</Link>
<Link
  href="/OurChef"
  className=" pb-2 text-white hover:cursor-pointer hover:bg-yellow-400 text-white px-8 hover:shadow-md decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
>
  Our Chef
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
  
<div className='flex md:hidden text-white items-center  mt-0 '>

{/*             
<input type="text" placeholder='Search...' className=' flex  left-[120px] absolute  h-[30px]  mr-[0px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2  focus:outline-none'></input> */}
{/* 
<IoSearchOutline className=' flex   relative left-[280px]  absolute text-white' /> */}
<div className='flex  text-white'>
  <MdOutlineShoppingCart className='w-6 h-6 text-white left-[190px] top-[72px] absolute' />
</div>
</div>
    
</Sheet>

    
    
    
    
    
    </>
  )
}

export default NavbarMbl
