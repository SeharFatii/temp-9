import React from 'react'
import Image from 'next/image'
import cup1 from "../../../public/images/unsplash_-GFCYhoRe48 (1).png"

import cup2 from "../../../public/images/unsplash_90HdOlGbjck.png"

import cup3 from "../../../public/images/unsplash_akwA-GPF710.png"

import { HiOutlineShoppingBag } from 'react-icons/hi2'
import grop1 from "../../../public/images/Group.png"
import grop2 from "../../../public/images/Group (1).png"
import grop3 from "../../../public/images/Group (2).png"
import grop4 from "../../../public/images/Group (3).png"
const BurgerMenu = () => {
  return (

    <>
   <section 
  className="hidden md:flex flex-wrap items-center gap-12 px-4" 
  style={{ marginLeft: '10%' }}
>
  <Image 
    src={cup1} 
    alt="cup1" 
    className="ml-4 pl-8 flex justify-center items-center rounded-[35px] shadow-md" 
  />

  <div 
    className="flex flex-col" 
    
  >
    <h2 
      className="text-4xl font-bold flex gap-4 hover:underline hover:decoration-orange-400"
    >
      Starter Menu
      <span><HiOutlineShoppingBag className='hover:text-orange-400'/></span>
    </h2>
{/* row 1 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>

    {/* row-2 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>


    {/* row 3 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>


    {/* row-4 */}
   
  </div>
</section>


    {/* Burger */}
    <section 
    className="hidden md:flex flex-wrap items-center gap-12 px-4 pt-8" 
    style={{ marginLeft: '10%', marginTop:'10%' }}
  >
    
  
    <div 
      className="flex flex-col" 
      
    >
      <h2 
        className="text-4xl font-bold flex gap-4 hover:underline hover:decoration-orange-400"
      >
        Main Courses
        <span><HiOutlineShoppingBag className='hover:text-orange-400'/></span>
      </h2>
  {/* row 1 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
      {/* row-2 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
  
      {/* row 3 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
  
      {/* row-4 */}
     
    </div>

    {/* Image */}


    <Image 
      src={cup1} 
      alt="cup1" 
      className="ml-4 pl-8 flex justify-center items-center rounded-[35px] shadow-md" 
    />


  </section>
{/* icons */}
<section className='pt-8 hidden md:block mt-8 bg-black pb-8'>
<div className='flex justify-center items-center gap-24 pt-8'>
<div className=' flex flex-col justify-center items-center'>
  <Image src={grop1} alt='' />
  <h2 className='text-white ml-8 mt-8 font-bold text-3xl'>420</h2>
  <h2 className='text-white flex mt-2 ml-8 font-bold text-3xl'>professional chefs</h2>
  </div>

  <div className='flex  flex-col justify-center items-center'>
  <Image src={grop2} alt='' />
  
  <h2 className='text-white ml-8 mt-8 font-bold text-3xl'>420</h2>
  <h2 className='text-white flex mt-2 ml-8 font-bold text-3xl'>items of food</h2>
 
  </div>
  <div className='flex  flex-col justify-center items-center'>
  <Image src={grop3} alt='' />
  
  <h2 className='text-white ml-8 mt-8 font-bold text-3xl'>32+</h2>
  <h2 className='text-white flex mt-2 ml-8 font-bold text-3xl'>years of experience</h2>
 
  </div>
  






  <div className='flex  flex-col justify-center items-center'>
  <Image src={grop4} alt='' />
  
  <h2 className='text-white ml-8 mt-8 font-bold text-3xl'>320</h2>
  <h2 className='text-white flex mt-2 ml-8 font-bold text-3xl'>happy customers</h2>
 
  </div></div>


</section>



{/* Desert */}
<section 
  className="hidden md:flex flex-wrap items-center mt-8 gap-24 px-4" 
  style={{ marginLeft: '10%' }}
>
  <Image 
    src={cup2} 
    alt="cup1" 
    className="ml-4 pl-8 flex mt-8 justify-center items-center rounded-[35px] shadow-md" 
  />

  <div 
    className="flex flex-col" 
    
  >
    <h2 
      className="text-4xl font-bold flex gap-4 hover:underline hover:decoration-orange-400"
    >
      Dessert
      <span><HiOutlineShoppingBag className='hover:text-orange-400'/></span>
    </h2>
{/* row 1 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>

    {/* row-2 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>


    {/* row 3 */}
    <div 
      role="alert" 
      className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
    >
      <h2 
        className="text-4xl font-bold flex justify-between items-center gap-8"
      >
        Alder Grilled Chinook Salmon
        <span 
          className="text-2xl font-bold hover:text-yellow-400" 
          style={{ marginLeft: '48px' }}
        >
          $13
        </span>
      </h2>

      <h2 
        className="px-4" 
        style={{ marginLeft: '-220px' }}
      >
        Toasted Bread Cheddar topped with romano cheddar
      </h2>

      <h2 style={{ marginLeft: '-530px' }}>
        560 CAL
      </h2>
    </div>


    {/* row-4 */}
   
  </div>
</section>
{/* Drinks */}




<section 
    className=" hidden md:flex flex-wrap items-center gap-24 px-4 pt-8" 
    style={{ marginLeft: '10%', marginTop:'10%' }}
  >
    
  
    <div 
      className="flex flex-col" 
      
    >
      <h2 
        className="text-4xl font-bold flex gap-4 hover:underline hover:decoration-orange-400"
      >
        Drinks
        <span><HiOutlineShoppingBag className='hover:text-orange-400'/></span>
      </h2>
  {/* row 1 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
      {/* row-2 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
  
      {/* row 3 */}
      <div 
        role="alert" 
        className="alert alert-success bg-orange-400 mt-4 flex flex-col px-8"
      >
        <h2 
          className="text-4xl font-bold flex justify-between items-center gap-8"
        >
          Alder Grilled Chinook Salmon
          <span 
            className="text-2xl font-bold hover:text-yellow-400" 
            style={{ marginLeft: '48px' }}
          >
            $13
          </span>
        </h2>
  
        <h2 
          className="px-4" 
          style={{ marginLeft: '-220px' }}
        >
          Toasted Bread Cheddar topped with romano cheddar
        </h2>
  
        <h2 style={{ marginLeft: '-530px' }}>
          560 CAL
        </h2>
      </div>
  
  
      {/* row-4 */}
     
    </div>

    {/* Image */}


    <Image 
      src={cup3} 
      alt="cup1" 
      className="ml-4 pl-8 flex justify-center items-center rounded-[35px] shadow-md" 
    />


  </section>






  </>
  )
}

export default BurgerMenu