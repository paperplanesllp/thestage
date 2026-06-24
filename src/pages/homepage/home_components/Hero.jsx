import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img from "../../../assets/IMG_2315.jpg.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {



  const navigate=useNavigate()
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
        stagger: 0.30, 
        delay: 0.4,
      }
    );
  }, []);

  const lines = [
    "For The Pursuit Of Truth"
  ];

  return (

  <section
    id="hero"
    className="relative w-full flex flex-col justify-center items-center min-h-[105vh] bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: "50% 70%",
    }}
  >

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-t from-[#080706] via-black/20 to-black/30" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent via-white/45 to-white" />

      {/* hero text */}
      <blockquote
        className="
          relative md:pt-70 pt-16
          w-full max-w-6xl px-6
          text-center font-normal italic
          text-white text-3xl md:text-5xl lg:text-6xl
          tracking-wide leading-tight
        "
        style={{ fontFamily: "Georgia, serif" }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            className="block will-change-transform"
          >
            “{line}”
          </span>
        ))}
      </blockquote>

      <button onClick={()=>navigate('/stage_brochure')} className="border md:mb-20   text-xl text-white hover:bg-[#8C3917] transition-all duration-300 z-10 p-3 mt-33">KNOW MORE</button>
    </section>
  );
};

export default Hero;
