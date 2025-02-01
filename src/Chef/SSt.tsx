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
  const query = `*[_type == "chef"][1..3] { image, name,position }`;
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
    <div className="flex justify-center items-center pb-8 gap-4 px-8 flex-wrap pt-8">
  {chefs.map((chef, index) => (
    <div
      key={index}
      className="bg-gray-600 rounded-lg w-[310px] h-[400px] p-5 text-center relative"
    >
      {/* Chef Image */}
      {chef.image && (
        <Image
          src={urlFor(chef.image)}
          alt={chef.name}
          width={360}
          height={300}
          className="rounded-[25px] mx-auto pb-6"
        />
      )}

      {/* Yellow Divider and Text */}
      <div className="h-[9px] w-[290px] bg-yellow-400 rounded-lg mx-auto -mt-8">
        <h3 className="font-bold bg-white text-xl text-gray-800 -mt-6 px-2">
          {chef.name}
        </h3>
        <h3 className="font-bold bg-white text-lg text-gray-800 px-2">
          {chef.position}
        </h3>
      </div>
    </div>
  ))}
</div>


        
  );
};

export default SSt;

