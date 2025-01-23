import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu } from 'lucide-react';

import Link from 'next/link';
import NavbarMbl from './NavbarMbl';


function Navbar() {
  return (<>
  
    <div className="bg-black ">
        <h2 className='text-white font-bold text-2xl md:text-2xl lg:text-4xl flex justify-center pt-4 items-center mx-8 ml-[0px] md:ml-[120px] text-yellow-400'>Food<span className='text-white'>tuck</span></h2>
      <header className="  mx-auto body-font ">
        <div className="flex  items-center justify-between h-20 mx-5">
        <NavbarMbl/>
          <nav className=" hidden lg:flex gap-[40px] ml-6 hidden md:flex w-full">

            <Link
              href="/"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Home
            </Link>
            <Link
              href="/Menu"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Menu
            </Link>
            <Link
              href="/Blogs"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Blog
            </Link>
            <Link
              href="/OurChef"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Our Chef
            </Link>
            <Link
              href="/BlogDetails"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              About
            </Link>
            <Link
              href="/OurShop"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Shop
            </Link>
            <Link
              href="/Sign"
              className="mr-5 text-white hover:cursor-pointer hover:underline decoration-[#FF9F0D] transform transition-transform duration-300 ease-in-out hover:translate-y-[-3px]"
            >
              Contact
            </Link>

          </nav>




          <div className=' hidden md:flex items-center mt-0'>
            <input type="text" placeholder='Search...' className='hidden sm:block md:block w-[263px] h-[40px] ml-[20px] border-[1px] border-[#FF9F0D] rounded-[20px] bg-black text-[white] placeholder:pl-2 pl-6 focus:outline-none'></input>

            <IoSearchOutline className='hidden sm:block w-6 h-6 relative right-8 text-white' />
            <div className='hidden md:flex gap-3'>
              <MdOutlineShoppingCart className='w-6 h-6 text-white' />
            </div>



            
        
</div>
</div>

</header>
</div>
</>

)
}

export default Navbar