import React from 'react'
import Image from "next/image";
import choose1 from "../../public/images/image10.png"

import choose2 from "../../public/images/image11.png"
import choose3 from "../../public/images/image12.png"
import choose4 from "../../public/images/image13.png"
import choose6 from "../../public/images/unsplash_dphM2U1xq0U (4).png"
import choose5 from "../../public/images/image14.png"

const Pictures = () => {
  return (
    <section className="bg-black text-white mt-4 py-8 px-4 py-8">
    <div className="flex px-8">
      <div className="grid grid-cols-3 gap-6 p-4 px-8 py-8">
        {/* First Row of Images */}
        <div className="flex gap-4 rounded-[45px] py-2 w-full bg-pink-300 items-center py-8">
          <Image
            src={choose1}
            width={362}
            height={356}
            alt="First image"
            className="rounded-[25px]"
          />
          <Image
            src={choose6}
            width={450}
            height={200}
            alt="Second image"
            className="rounded-[15px] pt-8 py-8"
          />
        </div>
  
        {/* Second Row of Images */}
        <div className="flex gap-4">
        <div className="flex gap-4">
          <Image
            src={choose2}
            width={244}
            height={306}
            alt="Third image"
            className="rounded-[15px]"
          />
          <Image
            src={choose3}
            width={221}
            height={226}
            alt="Fourth image"
            className="rounded-[15px] " 
          />
        </div>
  
        {/* Third Row of Images */}
        <div className="flex flex-col gap-4 items-end">
          <Image
            src={choose4}
            width={250}
            height={150}
            alt="Fifth image"
            className="rounded-[15px]"
          />
          <Image
            src={choose5}
            width={350}
            height={150}
            alt="Sixth image"
            className="rounded-[25px]"
          />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pictures