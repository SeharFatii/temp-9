'use client';

import React, { useEffect, useState } from 'react';
import { FoodItem } from '../../../types/product';
import { allProducts } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import CheckboxForm from './Checkbox';
import Link from 'next/link';

const AlProductss = () => {
  const [products, setProducts] = useState<FoodItem[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: FoodItem[] = await client.fetch(allProducts);
        setProducts(response);
      } catch (err) {
        console.log('Error fetching products:', err);
      }
    }

    fetchProduct();
  }, []);

  return (
    <>
      <section className="mt-8 flex flex-wrap lg:flex-nowrap gap-24 ml-8 mb-8 justify-center">
        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id || product.slug.current} className="rounded-[25px]">
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
        <div className="w-full lg:w-1/4 flex justify-center" style={{ width: '225px' }}>
          <CheckboxForm />
        </div>
      </section>
    </>
  );
};

export default AlProductss;
