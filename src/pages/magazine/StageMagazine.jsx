import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import heroimg from "../../assets/hero_bg_image.PNG";

const StageMagazine = () => {
  const comingRef = useRef([]);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(comingRef.current, {
      y: 80,
      opacity: 0,
      willChange: "transform",
    });

    tl.to(comingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.18,
      delay: 0.8,
    });
  }, []);

  const comingText = "COMING SOON";

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={heroimg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[50%_85%]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* THE STAGE MAGAZINE */}
        <h1
          className="relative z-10 mt-8 sm:mt-12 md:mt-15 translate-y-[6%] sm:translate-y-[10%] text-white text-center text-[2.2rem] sm:text-[3.4rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] leading-[0.95] mb-[-0.3rem] sm:mb-[-0.7rem] md:mb-[-1.2rem] logo-font"
          
        >
          The Stage Magazine
        </h1>

        {/* COMING SOON */}
        <h1 className="relative z-10 text-white font-medium text-[1.3rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.2rem] xl:text-[5.4rem] translate-y-[30%] sm:translate-y-[40%] md:translate-y-[60%] flex flex-wrap justify-center text-center leading-[1.4] sm:leading-[1.5] max-w-full">
          {comingText.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => (comingRef.current[i] = el)}
              className="inline-block transform-gpu will-change-transform"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </section>

      {/* QUOTE SECTION */}
      <section className="w-full min-h-[45vh] sm:min-h-[60vh] bg-white flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-[1200px] w-full">
          <p
            className="text-black text-[1.2rem] sm:text-[1.5rem] md:text-[2.2rem] leading-relaxed italic font-light text-center"
            style={{ fontFamily: "'Scope One', serif" }}
          >
            “An adventure is only an inconvenience rightly considered.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            An inconvenience is only an adventure wrongly considered.”
          </p>

          <p className="mt-5 sm:mt-6 text-black text-lg sm:text-sm md:text-[20px] tracking-wide text-center font-bold " style={{
            fontStyle: "italic",
            fontFamily: "Josefin Slab, serif",
          }}>
            — G.K. Chesterton
          </p>
        </div>
      </section>
    </>
  );
};

export default StageMagazine;