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
   <section className="w-full min-h-screen font-light bg-[position:50%_120%] md:bg-position-[50%_120%] bg-no-repeat bg-cover flex flex-col items-end justify-center px-4" style={{ backgroundImage: `url(${img})` }}>
       <div className="absolute inset-0 " />
      <div className="text-center w-full px-2 pb-16 pt-24 min-h-screen flex flex-col justify-center text-white md:pb-35 md:h-screen md:mt-23 md:pt-20" style={{ fontFamily: "jim-nightshade-regular" }}>
        <p
          ref={line4Ref}
          className="text-[2.9rem] leading-[1] tracking-tighter md:text-[8rem] font-thin opacity-40 italic"
         style={{ fontFamily: "jim-nightshade-regular"}}
        >READING IS 
        </p>
        <p
          ref={line3Ref}
          className="text-[2.6rem] leading-[0.9] tracking-tighter md:text-[8rem] font-light italic opacity-0"
          style={{ fontFamily: "jim-nightshade-regular" }}
        >
        THINKING GUIDED 
        </p>
        <p
          ref={line2Ref}
         className="text-[2.8rem] leading-[0.9] tracking-tighter italic md:text-[8rem] font-stretch-150% opacity-0"
         style={{fontFamily: "jim-nightshade-regular"}}
        >
          BY THE WORDS 
        </p>
        <p
          ref={line1Ref}
          className="text-[2.8rem] leading-[0.9] tracking-tighter italic md:text-[8rem] font-stretch-150% opacity-0"
          style={{ fontFamily: "jim-nightshade-regular" }}
        >
      OF ANOTHER.
        </p>
       {/* <h5 className= "text-3xl  text-end  font-thin inline-block text-white mt-5 ms-3 " style={{fontFamily: "jim-nightshade-regular"}}>- Mortimer J. Adler</h5> */}
      </div>


      {/* <p ref={paragraphRef} style={{ fontFamily: "Gordita, sans-serif" }} className="text-white me-10 text-justify  mt-23 pb-23 w-1/3 max-w-2xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus nihil illum omnis suscipit dolor, nobis debitis eveniet ipsam excepturi vitae accusantium expedita fugit, nostrum at alias nam maxime esse.
      </p> */}
    </section>
  );
}