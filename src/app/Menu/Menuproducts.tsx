import React from 'react'
import Image from 'next/image'
import cup1 from "../../../public/images/unsplash_-GFCYhoRe48 (1).png"
import cup4 from "../../../public/images/Rectangle 8874.png"
import cup2 from "../../../public/images/unsplash_90HdOlGbjck.png"

import cup3 from "../../../public/images/unsplash_akwA-GPF710.png"

import { HiOutlineShoppingBag } from 'react-icons/hi2'
import grop1 from "../../../public/images/Group.png"
import grop2 from "../../../public/images/Group (1).png"
import grop3 from "../../../public/images/Group (2).png"
import grop4 from "../../../public/images/Group (3).png"



const Menuproducts = () => {
  return (
    <>

    {/* section 1  */}
  <section className=" flex md:hidden flex-wrap items-center gap-8 px-4 sm:px-8 lg:px-16 py-8">
  {/* Image Section */}
  <Image
    src={cup4}
    alt="cup1"
    className="rounded-[35px] shadow-md w-full sm:w-1/2 lg:w-1/3 mx-auto"
  />

  {/* Text Section */}
  <div className="flex flex-col w-full sm:w-1/2 lg:w-2/3">
    {/* Section Title */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-4 hover:underline hover:decoration-orange-400 mb-4">
      Starter Menu
      <HiOutlineShoppingBag className="hover:text-orange-400" />
    </h2>

    {/* Menu Items */}
    {[
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted Bread Cheddar topped with romano cheddar",
        calories: "560 CAL",
        price: "$13",
      },
      {
        name: "Garlic Butter Shrimp Pasta",
        description: "Rich and creamy sauce with garlic and shrimp",
        calories: "480 CAL",
        price: "$15",
      },
      {
        name: "Classic Caesar Salad",
        description: "Crisp romaine lettuce, parmesan, and croutons",
        calories: "320 CAL",
        price: "$10",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-orange-400 text-white rounded-lg shadow-md p-4 mb-4 flex flex-col"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold flex justify-between items-center">
          {item.name}
          <span className="text-lg sm:text-xl lg:text-2xl font-bold hover:text-yellow-400">
            {item.price}
          </span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mt-2">{item.description}</p>
        <p className="text-sm mt-1">{item.calories}</p>
      </div>
    ))}
  </div>
</section>


{/* section 2 */}

<section 
  className="flex md:hidden flex-col-reverse md:flex-row flex-wrap items-center gap-8 px-4 pt-8 md:px-12 md:pt-12"
>
  {/* Text Section */}
  <div className="flex flex-col w-full md:w-1/2">
    <h2 
      className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-4 hover:underline hover:decoration-orange-400"
    >
      Main Courses
      <span><HiOutlineShoppingBag className="hover:text-orange-400" /></span>
    </h2>

    {/* Row 1 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-lg sm:text-xl md:text-2xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base md:text-lg">
        560 CAL
      </p>
    </div>

    {/* Row 2 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-lg sm:text-xl md:text-2xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base md:text-lg">
        560 CAL
      </p>
    </div>

    {/* Row 3 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-lg sm:text-xl md:text-2xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base md:text-lg">
        560 CAL
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image 
      src={cup1} 
      alt="cup1" 
      className="w-full max-w-sm rounded-[35px] shadow-md" 
    />
  </div>
</section>








{/* icons */}
<section className="bg-black py-8 mt-8 block md:hidden">
  <div className="flex flex-cols-3 justify-center gap-8 sm:gap-12 lg:gap-24 px-4">
    {[
      { img: grop1, label: '420', subLabel: 'Professional chefs' },
      { img: grop2, label: '420', subLabel: 'Items of food' },
      { img: grop3, label: '32+', subLabel: 'Years of experience' },
      { img: grop4, label: '320', subLabel: 'Happy customers' },
    ].map((icon, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-center w-1/2 sm:w-auto"
      >
        <Image
          src={icon.img}
          alt={icon.subLabel}
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
        <h2 className="text-white font-bold text-xl sm:text-2xl mt-4">
          {icon.label}
        </h2>
        <p className="text-white text-sm sm:text-lg lg:text-xl mt-2">
          {icon.subLabel}
        </p>
      </div>
    ))}
  </div>
</section>

    {/* section 3 */}
    
    <section 
  className="flex md:hidden flex-wrap md:flex-row flex-wrap items-center gap-8 px-4 mt-8 md:mt-12 md:gap-24 md:px-12"
>
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image 
      src={cup2} 
      alt="Dessert" 
      className="w-full max-w-sm rounded-[35px] shadow-md"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col w-full md:w-1/2">
    <h2 
      className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-4 hover:underline hover:decoration-orange-400"
    >
      Dessert
      <span>
        <HiOutlineShoppingBag className="hover:text-orange-400" />
      </span>
    </h2>

    {/* Row 1 */}
    <div 
      className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg"
    >
      <h2 
        className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center"
      >
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>

    {/* Row 2 */}
    <div 
      className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg"
    >
      <h2 
        className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center"
      >
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>

    {/* Row 3 */}
    <div 
      className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg"
    >
      <h2 
        className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center"
      >
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>
  </div>
</section>

    {/* section 4 */}
    <section 
  className="flex md:hidden flex-col-reverse md:flex-row flex-wrap items-center gap-8 px-4 pt-8 md:gap-24 md:px-12"
>
  {/* Drinks Details Section */}
  <div className="w-full md:w-1/2 flex flex-col">
    <h2 
      className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-4 hover:underline hover:decoration-orange-400"
    >
      Drinks
      <span>
        <HiOutlineShoppingBag className="hover:text-orange-400" />
      </span>
    </h2>

    {/* Row 1 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>

    {/* Row 2 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>

    {/* Row 3 */}
    <div className="bg-orange-400 mt-4 flex flex-col gap-2 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex justify-between items-center">
        Alder Grilled Chinook Salmon
        <span className="text-base sm:text-lg md:text-xl font-bold hover:text-yellow-400">
          $13
        </span>
      </h2>
      <p className="text-sm sm:text-base">
        Toasted Bread Cheddar topped with romano cheddar
      </p>
      <p className="text-sm sm:text-base">
        560 CAL
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image 
      src={cup3} 
      alt="Drink" 
      className="w-full max-w-sm rounded-[35px] shadow-md"
    />
  </div>
</section>
    
    
    
    
    
    </>
  )
}

export default Menuproducts