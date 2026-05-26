import React from "react";

const Replace = () => {
  return (
    <div
      className="w-full bg-white flex justify-center items-center px-4 text-center"
      style={{ height: "50ch" }}
    >
      <div className="w-full max-w-[1060px]">
        <p className="text-[28px]  md:text-[38px] lg:text-5xl xl:text-6xl font-light leading-[1.35] sm:leading-[1.3] lg:leading-tight italic"
        style={{ fontFamily: "'Scope One', serif" }}>
          <span className="font-normal">“Read </span>
          not to contradict and confute, nor to believe and take for
          granted, but to
          <span className="font-normal"> weigh and consider.”</span>
        </p>

        <p
          className="mt-4 sm:mt-5 text-[23px]  md:text-[20px] font-bold text-black"
          style={{
            fontStyle: "italic",
            fontFamily: "Josefin Slab, serif",
          }}
        >
          - Francis Bacon
        </p>
      </div>
    </div>
  );
};

export default Replace;