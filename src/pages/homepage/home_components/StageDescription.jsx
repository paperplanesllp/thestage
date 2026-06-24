import React from "react";
import image from "../../../assets/description_image.png";

export const HomeQuote = () => {
  return (
    <section className="relative flex w-full flex-col bg-white px-5 py-12 sm:py-16 md:py-20">
      {/* TEXT CONTENT */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <p
          className="max-w-6xl text-2xl italic leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &ldquo;Fine. Since the tea is not forthcoming, let&apos;s have a
          philosophical conversation.&rdquo;
          <span className="mt-1 block text-left text-base sm:ml-[64%] sm:text-lg md:text-xl lg:text-2xl">
            &mdash; Chekhov
          </span>
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
