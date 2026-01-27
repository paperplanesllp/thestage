import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img from "../../../assets/magazine_img.JPEG";

const Hero = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.30, // 👈 line-by-line delay
        delay: 0.4,
      }
    );
  }, []);

  const lines = [
    "For the minds that don't",
    "settle for the surface."
  ];

  return (
    <section
      className="relative w-full flex justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "50% 70%",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

      {/* hero text */}
      <h1
        className="
          relative mt-40 text-center font-extralight
          text-white text-3xl md:text-[7rem]
          tracking-wide leading-[0.8] px-2 uppercase max-w-7xl
        "
        style={{ fontFamily: "Glass Antiqua, cursive" }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="block will-change-transform"
          >
            {line}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Hero;
