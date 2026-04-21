import React from "react";
import image from "../../../assets/description_image.png";

const StageDescription = () => {
  return (
    <section className="relative flex w-full flex-col bg-white">
      {/* TEXT CONTENT */}
      <div className="mt-6 w-full bg-[#bd925f] px-4 py-4 sm:mt-8 sm:px-6 sm:py-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-center">
          <p
            className="text-center italic text-white italic text-base leading-relaxed sm:text-lg md:text-2xl lg:text-3xl px-2 sm:px-4 md:px-6"
            // style={{ fontFamily: "jim-nightshade-regular" }}
            style={{ fontFamily: "'Scope One', serif" }}
          >
            Fine. Since <span>the tea</span> is not forthcoming,
            <span> let&apos;s</span> have a{" "}
            <span>philosophical conversation.</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              {" "}
              - Chekhov
            </span>
          </p>
        </div>
      </div>

      {/* LINE ART IMAGE */}
      <div className="mt-6 flex w-full justify-center px-0 pb-3 sm:mt-8">
        <img
          src={image}
          alt="Line art illustration"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
};

export default StageDescription;