import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from '../../../assets/archive_img.JPEG'
gsap.registerPlugin(ScrollTrigger);

export default function ArchiveLand() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current];

    gsap.fromTo(
      lines,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power3.out",
        stagger: 0.30,
        delay: 1
      }
    );

    // Split paragraph into words for stagger effect
    if (paragraphRef.current) {
      const text = paragraphRef.current.textContent;
      const words = text.split(' ');
      
      paragraphRef.current.innerHTML = words
       paragraphRef.current.innerHTML = words
  .map(word => `<span class="inline-block opacity-0">${word} </span>`)
  .join('');


      const wordElements = paragraphRef.current.querySelectorAll('span');

      gsap.fromTo(
        wordElements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.03,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="w-full min-h-screen bg-position-[50%_120%] bg-no-repeat bg-cover flex flex-col items-end justify-center px-4"style={{backgroundImage:`url(${img})`}}>
       <div className="absolute inset-0 bg-black/20" />
      <div className="text-center w-full pb-35 h-screen mt-23 pt-20 text-white"style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}>
        <p
          ref={line4Ref}
          className="text-xl leading-27 tracking-tighter md:text-[8rem] font-medium opacity-0"
         style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}
        >
          FOR THE MINDS
        </p>
        <p
          ref={line3Ref}
          className="text-xl leading-27 tracking-tighter md:text-[8rem] font-medium opacity-0"
          style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}
        >
          THAT DONT
        </p>
        <p
          ref={line2Ref}
          className="text-3xl leading-27 tracking-tighter md:text-[8rem] font-medium opacity-0"
         style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}
        >
          SETTLE FOR THE
        </p>
        <p
          ref={line1Ref}
          className="text-3xl leading-27 tracking-tighter md:text-[8rem] font-medium opacity-0"
          style={{ fontFamily: "Bricolage Grotesqu, sans-serif" }}
        >
          SURFACE.
        </p>
      </div>
      {/* <p ref={paragraphRef} style={{ fontFamily: "Gordita, sans-serif" }} className="text-white me-10 text-justify  mt-23 pb-23 w-1/3 max-w-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus nihil illum omnis suscipit dolor, nobis debitis eveniet ipsam excepturi vitae accusantium expedita fugit, nostrum at alias nam maxime esse.
      </p> */}
    </section>
  );
}