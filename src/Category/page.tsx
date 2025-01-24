'use client';
import React from "react";
import Image from "next/image";
import choose1 from "../../public/images/category1.jpeg"
import choose2 from "../../public/images/category2.png"
import choose3 from "../../public/images/category3.jpeg"
import choose4 from "../../public/images/category4.jpeg"
import CategoryMbl from "./CategoryMbl";
import { Satisfy } from "next/font/google";




const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--satisfy',
  weight: '400',
});
function Category() {
  return (<>
    <section className="bg-black hidden md:block justify-center text-white">
        <div className="flex justify-center pb-8  ">
        <div className=" justify-center items-center  px-8">
            <h2 className="text-orange-400 font-satisfy px-4 text-4xl">Food Category</h2>
            <h2 className="text-white font-bold  text-2xl font-bold px-2">
                <span className="text-orange-400 ">Choose</span> Food Items
            </h2>
            
            </div>

        </div>
        <div className="flex gap-3 mt-[120px] px-8 transition-all justify-center ">
                <Image src={choose1} alt="" width={300} height={180} className="fadeIn object-cover rounded-[25px] "/>
                <Image src={choose2} alt="" width={300} height={180} className="rounded-[25px] fadeIn object-cover "/>
                <Image src={choose3} alt="" width={300} height={180} className="rounded-[25px] fadeIn object-cover "/>
                <Image src={choose4} alt="" width={300} height={180} className="rounded-[25px] fadeIn object-cover "/>
                
            </div>
            
               {/* Inline CSS for keyframes animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
    <CategoryMbl/>
    </>
  );
}

export default Category;