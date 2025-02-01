import { groq } from "next-sanity";


export const allProducts = groq`
   *[_type == "food"]{
    id,
    name,
    category,
    price,
    slug,
    image,originalPrice
  }
`;



export const FewProducts = groq`
  *[_type == "food"][2..4]{
    id,
    name,
    category,
    price,
    slug,
    image,originalPrice
  }
`;
