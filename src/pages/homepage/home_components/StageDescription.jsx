import React from "react";
import image from "../../../assets/description_image.png"; // line-art image

const StageDescription = () => {
  return (
    <section className="w-full relative   bg-white flex flex-col ">
      
      {/* TEXT CONTENT */}
      

{/* <div
  className="
    absolute bottom-0 left-0 w-full h-full
    bg-linear-to-t
    from-black/80 via-blue-200/20 to-transparent
  "
>
 
   </div> */}

<div className=" mt-8 w-full text-center">
       

        <p className=" py-2 bg-[#70310E] text-white font-semibold text-xl md:text-4xl  leading-relaxed"style={{ fontFamily: "Josefin Slab, serif" }}>
          Fine. Since <span className="font-semibold">the tea </span> is not forthcoming, 
          <span className="font-semibold"> let's</span> have a{" "}
          <span className="font-semibold">philosophical conversation.</span>
        </p>
      </div> 

      {/* LINE ART IMAGE */}


      <div className="w-full mt-8 pb-3 p-0 flex justify-center  ">
        <img
          src={image}
          alt="Line art illustration"
          className=" w-full object-cover"
        />
      </div>
      
     
    </section>
  );
};

export default StageDescription;
