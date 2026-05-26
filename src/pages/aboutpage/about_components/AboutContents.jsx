import React from "react";
import { useNavigate } from "react-router-dom";

const AboutContents = () => {


  const navigate=useNavigate()
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

      

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-wide">
          Our Story
        </h2>

       

        {/* Divider */}
        <div className="my-8 h-px mx-auto bg-gray-500 w-[80%]" />

        {/* Two-column editorial text */}
     <div
  className="grid w-full grid-cols-1 md:grid-cols-1   justify-items-center"
  style={{ fontFamily: "Gordita, sans-serif" }}
>
  <p className="text-black font-light text-sm leading-4.5 text-[15px] w-[80%] text-justify" style={{ fontFamily: "'Scope One', serif" }}>
    <span className="text-[#8a3310] font-bold">The Stage</span> is a curated intellectual forum devoted to serious ideas, scholarly thought, and disciplined public conversation. It offers space for slow thinking, reasoned dialogue, and credible inquiry in an age dominated by immediacy and opinion.

Hosting structured conversations across philosophy, science, history, politics, literature, religion, and related disciplines, The Stage grounds its discussions in established scholarship, rigorous reasoning, and intellectual honesty, while remaining accessible to engaged thinkers.

Through talks, moderated discussions, and debates, The Stage fosters critical thinking, attentive listening, and respectful disagreement.

<span className="font-normal"> For minds that do not settle for the surface</span>, The Stage bridges academic depth and public discourse, encouraging engagement with ideas grounded in credible scholarship.
  </p>

  
</div>

<div className="w-full text-center mt-10">
<button onClick={()=>navigate('/stage_brochure')} className="md:text-3xl p-5 px-8 text-md border-2 hover:bg-[#8C3917] uppercase hover:text-white transition-all duration-300">Brochure</button>
</div>
       

      </div>
    </section>
  );
};

export default AboutContents;
