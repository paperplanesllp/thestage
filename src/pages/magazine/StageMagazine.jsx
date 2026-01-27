import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import img from "../../assets/about_img.JPEG";
import heroimg from '../../assets/hero_bg_image.PNG'
const StageMagazine = () => {
  const magazineRef = useRef([]);
  const comingRef = useRef([]);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    // INITIAL SET
    gsap.set([comingRef.current], {
      y: 80,
      opacity: 0,
      willChange: "transform",
    });

    

    // 2️⃣ COMING SOON (starts AFTER first finishes)
    tl.to(
      comingRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.18,
        delay:0.8
      },
      
       // small breathing gap (optional)
    );
  }, []);

  const magazineText = "The Stage Magazine";
  const comingText = "COMING SOON";

  return (
    <section
      className="relative w-full h-screen mb-75 flex flex-col justify-center items-center overflow-hidden"
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
  className="relative z-10 mt-15 translate-y-[10%] text-white text-[8rem] flex leading-[0.9] mb-[-1.2rem]"
  style={{ fontFamily: "XB Niloofar", fontStyle: "italic" }}
>
  The Stage Magazine
</h1>



      {/* COMING SOON */}
     <h1 className="relative z-10 text-white font-medium text-[5.4rem] translate-y-[60%] flex leading-[1.5]]">
  {comingText.split("").map((char, i) => (
    <span
      key={i}
      ref={(el) => (comingRef.current[i] = el)}
      className="inline-block transform-gpu will-change-transform"
    >
      {char === " " ? "\u00A0" : char}.
    </span>
  ))}
</h1>

    </section>
  );
};

export default StageMagazine;
