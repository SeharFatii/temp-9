import React from 'react'
import Image from 'next/image'
 
 import men from "../../public/images/Ellipse 6 (2).png"
 import { LiaCommentDots } from "react-icons/lia";
 import { LiaStarSolid } from "react-icons/lia";
 import hero from "../../public/images/unsplash_E6DsqnZbZ4o (1).png"

 const stars = [
  <LiaStarSolid key={1} className="text-yellow-400" />,
  <LiaStarSolid key={2} className="text-yellow-400" />,
  <LiaStarSolid key={3} className="text-yellow-400" />,
  <LiaStarSolid key={4} className="text-yellow-400" />,
  <LiaStarSolid key={5} className="text-yellow-400" />,
  <LiaStarSolid key={6} style={{ color: 'black' }} />,
]
 const commenticon=<LiaCommentDots  key={1} className="text-orange-400"/>

const Testimonials = () => {
  return (
    <>
  <section className="bg-black text-white px-8 py-8">
    <div className="block items-center justify-center pt-8 py-4 pb-8 px-8 ml-4">
      <h2 className="px-8 ml-4 text-orange-400 font-satisfy text-3xl">Testimonials</h2>
      <h2 className="px-8 ml-4 font-bold leading-4 text-6xl">What Our Client Saying</h2>
    </div>

    {/* Pink Section */}

    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div
          className="lg:w-1/2 lg:w-3/4 w-1/2 mx-auto text-black text-center"
          style={{
            borderRadius: '25px',
            backgroundColor: 'rgb(255,255,255)',
          }}
        >
          <div className="px-8 flex items-center rounded-[25px] justify-center">
            <Image
              src={men}
              alt=""
              className="rounded-[50px] mt-8 flex items-center justify-center px-8 ml-4"
            />
          </div>

          <div className="flex items-center justify-center  text-6xl pt-8 pb-8 ">
            {commenticon}
          </div>
          <p
            className="leading-relaxed text-xl text-black px-2"
            style={{
              
              color: 'black',
              fontSize: '20px',
            }}
          >
            Ennui cray blue bottle kickstarter four dollar toast. Cred sriracha
            church-key synth, art party deep v chillwave. Seitan High Life
            reprehenderit consectetur cupidatat kogi. Et leggings fanny pack
            cronut magdalena.
          </p>
          

      

          <h2 className="  font-medium title-font tracking-wider text-2xl flex items-center justify-center pt-8">
            {stars}
          </h2>
          <h2 style={{color:'black'}} className='font-bold text-2xl pt-4 px-2'>Alamin Hassan</h2>
          <p className="text-lg px-2 pb-4" style={{color:'black'}}>Food Specialist</p>
        </div>
      </div>
    </section>
  </section>



{/* crousel */}

<section className="relative w-full h-full">
  {/* Background Image */}
  <Image 
    src={hero} 
    alt="hero" 
    className="w-full h-full object-cover z-0" 
  />
  
  {/* Heading Overlay */}
  <div className="absolute inset-0 flex flex-col  items-center justify-center" style={{marginTop:'-10px',marginLeft:'80px'}}>
    <h2 style={{marginTop:'-100px',marginLeft:'570px'}} className="font-satisfy pt-8 text-orange-400 text-4xl text-center bg-black/50 px-8 py-2 rounded-lg">
      Restaurant Active Process
    </h2>
    <h2 className='text-6xl font-bold text-white  ' style={{marginLeft:'500px',width:'850px'}}><span className='text-orange-400'>We</span> document every food bean process until it is saved</h2>
 <p className='text-white pt-8' style={{marginLeft:'500px',width:'800px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatem consequatur quae quos deleniti rerum obcaecati quaerat, harum repellendus asperiores incidunt eveniet facilis illo suscipit recusandae, excepturi esse? Quis, dicta!</p>
 
 <div className='flex justify-center pt-8  hover:underline hover:text-white  items-center pt-8' style={{marginTop:'8px'}}>
<button className='bg-transparent pt-8 py-4 pb-8 border-solid border-orange-400 flex  justify-center border-[5px] items-center px-8 rounded-[25px] w-[290px] text-orange-400 font-bold text-2xl' 
style={{borderColor:'orange',borderWidth:'5px',borderStyle:'solid',paddingTop:'8px',paddingBottom:'8px',paddingLeft:'8px',paddingRight:'8px',borderRadius:'25px',width:'290px',fontSize:'20px',fontWeight:'bold',color:'orange', marginLeft:'500px'}}>
see more</button>
</div>

 
  </div>
</section>























</>

  )
}

export default Testimonials