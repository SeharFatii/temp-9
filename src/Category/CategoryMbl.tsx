import React from 'react'
import Image from "next/image";
import choose1 from "../../public/images/category1.jpeg"
import choose2 from "../../public/images/category2.png"
import choose3 from "../../public/images/category3.jpeg"
import choose4 from "../../public/images/category4.jpeg"

const categoryMbl = () => {
  return (
    <>
    
    <section className="bg-black block md:hidden  justify-center text-white">
        <div className="flex flex-wrap justify-center   ">
        <div className=" justify-center items-center  px-8">
            <h2 className="text-orange-400  text-4xl">Food Category</h2>
            <h2 className="text-white font-bold  text-2xl font-bold px-2">
                <span className="text-orange-400 ">Choose</span> Food Items
            </h2>
            
            </div>

        </div>
        <div className="flex gap-3 mt-[120px] px-2 py-2 transition-all justify-center">
                <Image src={choose1} alt="" width={100} height={90} className="fadeIn object-cover rounded-[15px] "/>
                <Image src={choose2} alt="" width={100} height={90} className="rounded-[15px] fadeIn object-cover "/>
                
            </div>
               {/*
                Inline CSS for keyframes animations */}
 <div className="flex gap-3 mt-[120px] px-2 transition-all justify-center">
                <Image src={choose3} alt="" width={100} height={90} className="rounded-[15px] fadeIn object-cover "/>
                <Image src={choose4} alt="" width={100} height={90} className="rounded-[15px] fadeIn object-cover "/>
                
            </div>
    </section>
    
    </>
  )
}

export default categoryMbl