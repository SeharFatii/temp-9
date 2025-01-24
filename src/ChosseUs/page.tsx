import React from "react";
import Image from "next/image";
import choose1 from "../../public/images/image10.png";
import choose2 from "../../public/images/image11.png";
import choose3 from "../../public/images/image12.png";
import choose4 from "../../public/images/image13.png";
import choose5 from "../../public/images/image14.png";
import choose6 from "../../public/images/unsplash_dphM2U1xq0U (4).png";
import MBLchose from "./MBLchose";
import bg from "../../public/images/Background.png"
import { Satisfy } from "next/font/google";






const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--satisfy',
  weight: '400',
});

function ChooseUS() {
  return (
    <>
    <section className="hidden md:flex text-white bg-black pt-8 px-4">
      {/* Left Section: Images */}
      <section className="bg-black text-white mt-4 py-8 px-4 py-8">
    <div className="flex px-4 md:px-8 bg-black">
      <div className="grid grid-cols-3 gap-2 md:gap-6 p-4 px-8 py-8 bg-black">
        {/* First Row of Images */}
        <div className="flex gap-4 w-full rounded-[45px] py-2 w-full bg-pink-300 items-center py-8">
          <Image
            src={choose1}
            width={362}
            height={356}
            alt="First image"
            className="rounded-[25px] "
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

      {/* Right Section: Text */}
      <div className="flex-1 pl-8">
        <h2 className="text-orange-400 font-satisfy pt-4 text-xl md:text-2xl">Why Choose Us</h2>
        <h2 className="text-3xl md:text-6xl font-bold pt-4">
          <span className="text-orange-400">Ex</span>traordinary Taste<br />
          and Experienced
        </h2>
        <p className="pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dolorem a explicabo voluptate, magnam totam laborum possimus
          assumenda ab voluptatum commodi autem ut velit, nemo officiis eum
          nesciunt nisi et? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam fugiat laborum, omnis ullam accusamus laudantium
          placeat voluptas officiis? Consectetur porro eligendi quam vel
          pariatur? Praesentium tempore ex incidunt itaque. Sint!
        </p>
      </div>
    </section>


    <section>
      <Image src={bg} alt=""/>
    </section>
<MBLchose/>
    </>
  );
}

export default ChooseUS;
