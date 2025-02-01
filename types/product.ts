 export interface FoodItem {
   id: string;
   name: string;
   category: string;
   price: number;
   originalPrice:number;
   description:string;
   tags:string;
   slug: {
    
    _type:'slug';
    current: string; // Assuming it's a "slug" object with a "current" field
   };
   image: {
     asset: {
       _ref: string;
       _type: 'image';
     };
   };
 }
 