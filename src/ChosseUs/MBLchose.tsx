import React from "react";
import Image from "next/image";
import choose1 from "../../public/images/image10.png";
import choose2 from "../../public/images/image11.png";
import choose3 from "../../public/images/image12.png";
import choose4 from "../../public/images/image13.png";
import choose5 from "../../public/images/image14.png";
import choose6 from "../../public/images/unsplash_dphM2U1xq0U (4).png";
import { Satisfy } from "next/font/google";



const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--satisfy',
  weight: '400',
});

function ChooseUS() {
  return (
    <section className="flex flex-col md:hidden text-white bg-black pt-8 px-4">
     
     
       {/* Right Section: Text */}
       <div className="flex-1 mt-8 lg:mt-0 lg:pl-8">
        <h2 className="text-orange-400 font-satisfy text-xl md:text-2xl text-center lg:text-left">
          Why Choose Us
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold pt-4 text-center lg:text-left">
          <span className="text-orange-400">Ex</span>traordinary Taste<br />
          and Experienced
        </h2>
        <p className="pt-8 px-2 text-lg text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit dolorem a explicabo voluptate, magnam totam laborum
          possimus assumenda ab voluptatum commodi autem ut velit, nemo
          officiis eum nesciunt nisi et? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam fugiat laborum, omnis ullam accusamus
          laudantium placeat voluptas officiis? Consectetur porro eligendi quam
          vel pariatur? Praesentium tempore ex incidunt itaque. Sint!
        </p>
      </div>
     
     
     
     
     
      {/* Left Section: Images */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8">
          {/* First Row of Images */}
          <div className="flex flex-wrap gap-4  bg-pink-300 p-4 rounded-[25px]">
            <Image
              src={choose1}
              width={102}
              height={156}
              alt="First image"
              className="rounded-[25px]"
            />
            <Image
              src={choose6}
              width={100}
              height={100}
              alt="Second image"
              className="rounded-[15px]"
            />
          </div>

          {/* Second Row of Images */}
          <div className="flex flex-wrap md:flex-row gap-4 px-8">
            <Image
              src={choose2}
              width={105}
              height={99}
              alt="Third image"
              className="rounded-[20px]"
            />
            <Image
              src={choose3}
              width={100}
              height={96}
              alt="Fourth image"
              className="rounded-[20px]  top-0"
            />
          </div>

          {/* Third Row of Images */}
          <div className="flex flex-col gap-4 items-center pt-4">
            <Image
              src={choose4}
              width={195}
              height={150}
              alt="Fifth image"
              className="rounded-[25px]"
            />
            <Image
              src={choose5}
              width={190}
              height={150}
              alt="Sixth image"
              className="rounded-[25px]"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Text */}
     
    </section>
  );
}

export default ChooseUS;
