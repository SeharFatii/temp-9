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
  const query = `*[_type == "chef"][1..2] { image, name,position }`;
  const fetchedPosts = await client.fetch(query);
  return fetchedPosts;
};

const MBLsst = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const getChefs = async () => {
      const data = await fetchPosts();
      setChefs(data);
    };
    getChefs();
  }, []);

  return (
    <div className='grid justify-center items-center pb-8  px-8  pt-0 flex-wrap '>
      {chefs.map((chef, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#696969	',
            borderRadius: '8px',
            width: '260px',
            height: '350px',
            padding: '40px',
            paddingBottom: '30px',
            marginTop:'10px',
            textAlign: 'center',
            
          }}
          
        >
          {chef.image && (
            <Image
              src={urlFor(chef.image)}
              alt={chef.name}
              width={360}
              height={150}
              className='  flex  px-12 pb-8 pt-8 mt-8 rounded-[25px]'
            />
          )}
          <h3 className='font-bold bg-white text-xl '>{chef.name}</h3>
          <h3 className='font-bold bg-white pb-8 text-base'>{chef.position}</h3>
        </div>
        
      ))}
        </div>

        
  );
};

export default MBLsst;