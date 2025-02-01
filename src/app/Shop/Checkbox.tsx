'use client';

import { useState } from 'react';
import Image from 'next/image';
import banner from "../../../public/images/Banner (1).png"
const categories: Record<string, string[]> = {
  Categories: ['Sandwitches', 'Burger', '   Chicken Chup ' ,'Thai','Drink','Pizza','non veg'],

};

type Category = keyof typeof categories;
type Item = string;

export default function CheckboxForm() {
  const [selectedItems, setSelectedItems] = useState<Record<Item, boolean>>({});

  const handleChange = (category: Category, item: Item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected Items:', selectedItems);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Select Your Items</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="ml-4 space-y-2">
              {items.map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedItems[item] || false}
                    onChange={() => handleChange(category as Category, item)}
                    className="w-4 h-4"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        


        {/* button */}


        <div className='flex justify-center pt-8  hover:underline hover:text-white  items-center pt-8' style={{marginTop:'8px'}}>
<button className='bg-transparent pt-8 hover:underline hover:decoration-yellow-400 py-4 pb-8 border-solid border-orange-400 flex  justify-center border-[5px] items-center px-8 rounded-[25px] w-[290px] text-orange-400 font-bold text-2xl' 
style={{borderColor:'orange',borderWidth:'5px',borderStyle:'solid',paddingTop:'8px',paddingBottom:'8px',paddingLeft:'8px',paddingRight:'8px',borderRadius:'25px',width:'150px',fontSize:'20px',fontWeight:'bold',color:'orange'}}>
submit</button>
</div>

      </form>

<Image src={banner} alt='' className='mt-8 w-1/2 pt-8 ' style={{width:'490px',height:'290px'}} ></Image>

    </div>
  );
}