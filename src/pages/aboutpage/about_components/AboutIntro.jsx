import React from "react";
import img from "../../../assets/about_img.JPEG";

const AboutIntro = () => {
  return (
    <section
      className="w-full bg-black pt-20 "
      
    >
      <div className="max-w-8xl  mx-auto mt-10 px-10">

        {/* TOP TEXT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left small caption */}
          <p className=" md:text-4xl ms-3 font-light  text-white  mb-6"style={{ fontFamily: "Glass Antiqua, cursive" }}>
              For the minds that
don’t settle for the surface.
            </p>

          {/* Right main text */}
          <div className="flex ms-10 mt-10 justify-end">
           

            <p className="text-white  text-[15px] pt-20 font-light  w-167.5 leading-tight max-w-xl"style={{ fontFamily: "Gordita, sans-serif" }}>
              The Stage is dedicated to clarity, depth, and integrity. It
              brings together scholars, writers, and thoughtful individuals
              to engage critically with literature, philosophy, science,
              history, and culture.
            </p>

            {/* <p className="mt-4 text-black/70 mt-10 text-[15px] leading-relaxed max-w-xl">
              In an age shaped by noise and slogans, The Stage prioritizes
              intellectual honesty, nuance, and responsible dialogue—
              inviting reflection rather than reaction, and inquiry rather
              than persuasion.
            </p> */}
          </div>

        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="mt-15 w-full h-[90vh]  overflow-hidden">
        <img
          src={img}
          alt="About visual"
          className="w-full h-full object-[50%_90%] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutIntro;
