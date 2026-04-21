





import React from "react";
import img from "../../../assets/join_img.JPEG";

const ProgramBack = () => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen flex items-center justify-center px-4">
      
      {/* IMAGE */}
      <img
        src={img}
        alt="Membership"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-[50%_95%]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* TEXT */}
      <h1
        style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}
        className="relative text-white text-center leading-tight 
                   text-3xl sm:text-4xl md:text-6xl lg:text-[8rem]"
      >
        The Stage Membership
      </h1>
    </section>
  );
};

export default ProgramBack;