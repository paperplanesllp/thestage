import React from "react";
import img from "../../../assets/Untitled-design(41)aga.png";

const AboutIntro = () => {
  return (
    <section
      className="w-full bg-black pt-20 "
      
    >
      <div className="w-full  mx-auto md:mt-10 md:px-10 ">

        {/* TOP TEXT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-start">

          {/* Left small caption */}
<p className="text-center md:text-left text-[17px] md:text-4xl font-light  text-white md:mb-6 whitespace-nowrap">
  For the minds that don’t settle for the surface.
</p>



          <div className="flex md:ms-10 mt-10 md:justify-end">

  <p
    className="text-white text-[13px] md:text-[15px] font-light leading-tight   text-justify md:text-justify max-w-[86%] sm:max-w-md md:max-w-xl md:pt-20 mx-auto"
    style={{ fontFamily: "'Scope One', serif" }}
  >
    The Stage is dedicated to clarity, depth, and integrity. It brings together
    scholars, writers, and thoughtful individuals to engage critically with
    literature, philosophy, science, history, and culture.
  </p>

</div>

        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="mt-10 md:mt-15 w-full h-[50vh] sm:h-[60vh] md:h-[90vh] overflow-hidden">
  <img
    src={img}
    alt="About visual"
    className="w-full h-full object-cover object-center md:object-[50%_90%]"
  />
</div>
    </section>
  );
};

export default AboutIntro;
