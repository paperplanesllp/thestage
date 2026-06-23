import React from "react";
import image from "../../../assets/description_image.png";

export const HomeQuote = () => {
  return (
    <section className="relative flex w-full flex-col bg-white px-5 py-12 sm:py-16 md:py-20">
      {/* TEXT CONTENT */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p
          className="max-w-5xl text-3xl italic leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;Fine. Since the tea is not forthcoming, let&apos;s have a
          philosophical conversation.&rdquo;
        </p>
        <p
          className="mt-8 text-base font-semibold italic text-black sm:text-lg md:text-xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          - Chekhov
        </p>
      </div>
    </section>
  );
};

const StageDescription = () => {
  return (
    <section className="relative flex w-full flex-col bg-white">
      {/* LINE ART IMAGE */}
      <div className="mt-6 flex w-full justify-center px-0 sm:mt-8">
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
