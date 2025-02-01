'use client';

import React, { useEffect, useState } from 'react';
import { FoodItem } from '../../../types/product';
import { allProducts, FewProducts } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import CheckboxForm from './Checkbox';
import Link from 'next/link';

const SomeFood = () => {
  const [products, setProducts] = useState<FoodItem[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: FoodItem[] = await client.fetch(FewProducts);
        setProducts(response);
      } catch (err) {
        console.log('Error fetching products:', err);
      }
    }

    fetchProduct();
  }, []);

  return (
    <>
 
 <h2 className='text-4xl text-black flex mt-8 items-center ml-8 px-8 font-bold' style={{marginLeft:'320px'}}>Similar Products</h2>
 <div className="h-2 mt-[-5px] w-1/2 bg-orange-400 rounded mb-6  flex-col "
  style={{marginLeft:'357px',width:'200px'}} />
   
   
 
    <section className="mt-2 flex  flex-wrap lg:flex-nowrap gap-24 ml-8 mb-8 justify-center">
  
  
       
  {/* Products Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {products.map((product) => (
      <div key={product.id} className="rounded-[25px]">
       
       <Link href={`/product/${product.slug.current}`}>

 {product.image && (
          <img
            src={urlFor(product.image).url()}
            alt={product.name}
            width={300}
            height={300}
            className="mt-8"
          />
        )}
        <h2 className="text-2xl text-gray-900">{product.name}</h2>
        <div className="flex items-center gap-2">
  <p className="text-2xl text-yellow-400">${product.price}</p>
  {product.originalPrice && (
    <p className="text-xl text-gray-400 line-through">${product.originalPrice}</p>
    
  )}
</div>
</Link>

      </div>
    ))}
  </div>

  {/* Checkbox Form Section */}
  
</section>

  
    </>
  );
};

export default SomeFood;

