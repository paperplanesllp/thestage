import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroimg from '../../../assets/hero_bg_image.PNG'

const Hero = () => {
  const heroTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.7,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-no-repeat"
      style={{
        height: "95vh",
        backgroundImage: `url(${heroimg})`,
        backgroundPosition: "50% 80%",
      }}
    >


      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-black/70 via-black/20 to-transparent
        "
      />

      {/* hero text */}
      <h1
        ref={heroTextRef}
        className="
          absolute mt-40 ms-17
          flex items-center justify-start text-start font-extralight
          text-white text-3xl md:text-[7rem] max-w-lg
          tracking-wide leading-20 px-2
        "
        style={{ fontFamily: "Glass Antiqua, cursive" }}
      >
        For the minds that don&apos;t settle for the surface.
      </h1>
    </section>
  );
};

export default Hero;