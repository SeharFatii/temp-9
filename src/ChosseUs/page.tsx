import React from "react";
import Image from "next/image";
import choose1 from "../../public/images/image10.png";
import choose2 from "../../public/images/image11.png";
import choose3 from "../../public/images/image12.png";
import choose4 from "../../public/images/image13.png";
import choose5 from "../../public/images/image14.png";
import choose6 from "../../public/images/unsplash_dphM2U1xq0U (4).png";
import MBLchose from "./MBLchose";


function ChooseUS() {
  return (
    <>
<section className="hidden md:flex text-white bg-black pt-8 px-4">
  {/* Left Section: Images */}
  <section className="bg-black text-white mt-4 py-8 px-4">
    <div className="flex px-4 md:px-8 bg-black">
      <div className="grid grid-cols-3 gap-6 p-4 px-8">
        {/* First Column: First and Second Images */}
        <div className="grid grid-col gap-4 w-full rounded-[45px] items-center">
          <Image
            src={choose1}
            width={755}
            height={356}
            alt="First image"
            className="rounded-[25px]"
            style={{width:'550px' ,height:'520px'}}
          />
          <Image
            src={choose6}
            width={650}
            height={200}
            alt="Second image"
            className="rounded-[25px] pt-4"
            style={{width:'625px' ,height:'320px'}}
          />
        </div>

        {/* Second Column: Third and Fourth Images */}
        <div className="flex flex-wrap gap-4 ">
          <Image
            src={choose2}
            width={544}
            height={550}
            alt="Third image"
            className="rounded-[25px]"
            style={{width:'550px' ,height:'520px',}}
          />
          <Image
            src={choose3}
            width={221}
            height={126}
            alt="Fourth image"
            className="rounded-[25px]"
            style={{width:'250px' ,height:'340px'}}
          />
        </div>

        {/* Third Column: Fifth and Sixth Images */}
        <div className="flex flex-col gap-4" style={{ height:'90px',
          marginTop: '550px'
        }}>
          <Image
            src={choose4}
            width={250}
            height={50}
            alt="Fifth image"
            className="rounded-[25px]"
          />
          <Image
            src={choose5}
            width={250}
            height={50}
            alt="Sixth image"
            className="rounded-[25px]"
          />
        </div>
      </div>
    </div>
  </section>

  {/* Right Section: Text */}
  <div className="flex flex-col pt-8 " style={{marginTop:'50px'}} >
    <h2 className="text-orange-400 font-satisfy text-2xl md:text-2xl">Why Choose Us</h2>
    <h2 className="text-3xl md:text-6xl font-bold pt-4">
      <span className="text-orange-400">Ex</span>traordinary Taste
      <br />
      and Experienced
    </h2>
    <p className="pt-4   px-2" style={{width:'620px'}} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      dolorem a explicabo voluptate, magnam totam laborum possimus assumenda ab
      voluptatum commodi autem ut velit, nemo officiis eum nesciunt nisi et?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat
      laborum, omnis ullam accusamus laudantium placeat voluptas officiis?
      Consectetur porro eligendi quam vel pariatur? Praesentium tempore ex
      incidunt itaque. Sint!
    </p>
  </div>
</section>


<MBLchose/>
    </>
  );
}

export default ChooseUS;
