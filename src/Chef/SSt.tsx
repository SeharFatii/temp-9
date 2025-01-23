'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

// Define the Chef interface
interface Chef {
  name: string;
  image: any; // Replace with specific Sanity image type if available
  position: string;
}

// Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url();

// Fetch posts from Sanity
const fetchPosts = async (): Promise<Chef[]> => {
  const query = `*[_type == "chef"][1..4] { image, name,position }`;
  const fetchedPosts = await client.fetch(query);
  return fetchedPosts;
};

const SSt = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const getChefs = async () => {
      const data = await fetchPosts();
      setChefs(data);
    };
    getChefs();
  }, []);

  return (
    <div className='flex justify-center items-center pb-8 gap-4 px-8 flex-wrap pt-8'>
      {chefs.map((chef, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#696969	',
            borderRadius: '8px',
            width: '310px',
            height: '400px',
            padding: '20px',
            paddingBottom: '40px',
            
            textAlign: 'center',
            
          }}
        >
          {chef.image && (
            <Image
              src={urlFor(chef.image)}
              alt={chef.name}
              width={360}
              height={300}
              className='  flex  px-12 pb-8 rounded-[25px]'
            />
          )}
          <h3 className='font-bold bg-white text-2xl '>{chef.name}</h3>
          <h3 className='font-bold bg-white pb-8 text-xl'>{chef.position}</h3>
        </div>
        
      ))}
        </div>

        
  );
};

export default SSt;

