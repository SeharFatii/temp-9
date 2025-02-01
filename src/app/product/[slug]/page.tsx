import React from 'react';
import { FoodItem } from '../../../../types/product';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity'; // ✅ Import GROQ properly
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import MenuHero from '@/components/MenuHero';
import { FaStar } from "react-icons/fa";
import SomeFood from '@/app/Shop/SomeFood';


const stars=[<FaStar className='text-yellow-300 text-2xl'/>,
  <FaStar key={1} className='text-yellow-300 text-2xl'/>,
  <FaStar  key={2} className='text-yellow-300 text-2xl'/>,
  <FaStar key={3} className='text-yellow-300 text-2xl'/>,
  <FaStar key={4} className='text-yellow-300 text-2xl'/>,
  <FaStar key={5} className='text-gray-400 text-2xl'/>
]
interface ProductpageProps {
  params: { slug: string }; // ✅ Remove Promise
}

async function getProducts(slug: string): Promise<FoodItem > {
  return await client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      _type,
        name,
    category,
    price,
    slug,
    image,originalPrice,tags,description
    }`,
    { slug } // ✅ Pass slug as a query parameter
  );
}

export default async function Productpage({params}:ProductpageProps){
    const {slug}=await params;
    const product=await getProducts(slug)


return(<>
<MenuHero/>

  {/*  */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2">
      {/* images - start */}
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            
    {product.image && 
    <Image src={urlFor(product.image).url()}
    width={500}
    height={500}
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              className="h-full w-full object-cover object-center"
            />}
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100">
          {product.image && 
    <Image src={urlFor(product.image).url()}
    width={500}
    height={500}
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              className="h-full w-full object-cover object-center"
            />}
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100">
          {product.image && 
    <Image src={urlFor(product.image).url()}
    width={500}
    height={500}
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              className="h-full w-full object-cover object-center"
            />}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        {product.image && 
    <Image src={urlFor(product.image).url()}
    width={500}
    height={500}
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              className="h-full w-full object-cover object-center"
            />}
          
        </div>
      </div>
      {/* images - end */}
      {/* content - start */}
      <div className="md:py-8">
        {/* name - start */}
        <div className="mb-2 md:mb-3">
       
          
          <span className="mb-0.5 inline-block bg-orange-400 rounded-[20px] px-3 py-2 text-white">{product.category}</span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-6xl">
            {product.name}
          </h2>
        </div>
        {/* name - end */}
        {/* rating - start */}
        <div className="mb-6 flex items-center  md:mb-10">
          <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempora sint iste sit? Magnam, quod quasi provident error similique recusandae, fugiat iusto assumenda totam soluta ullam, aut sapiente possimus et.</p>
        </div>
        {/* rating - end */}
        {/* color - start */}
        <div className="mb-4  gap-2 flex items-center  ">
          <span className='text-3xl  text-gray-900'>Price:</span>
          <span className="mb-3 inline-block text-4xl font-semibold text-orange-400 md:text-4xl">
            {product.price}$
          </span>
          <span className=" inline-block text-sm font-semibold text-gray-500 md:text-2xl mt-2 line-through">
            {product.originalPrice}$
          </span>
          
        </div>
        {/* color - end */}
        {/* size - start */}
        <div className="mb-8 md:mb-10">
          <span className="mb-3 flex text-sm font-semibold text-gray-500 md:text-base">
            {stars}
          </span>
        
        </div>
        {/* size - end */}
        {/* price - start */}
       
        {/* price - end */}
        {/* shipping notice - start */}
       
        {/* shipping notice - end */}
        {/* buttons - start */}
        <div className="flex gap-2.5">
          <a
            href="#"
            className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
          >
            Add to cart
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Buy now
          </a>
        </div>
        {/* buttons - end */}
      </div>
      {/* content - end */}
    </div>
  </div>

</div>
<div className='flex-col ml-8 pl-8' style={{marginLeft:'320px', width:'950px'}}>
  <h2 className='font-bold text-4xl'>Description</h2><h2 className='text-gray-900 text-2xl t'>{product.description}</h2></div>

<SomeFood/>
</>
)






}
