import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import img1 from "../../../assets/brochure_pics_1.jpg";
import img2 from "../../../assets/brochure_pics_2.jpg";

const AboutBrochure = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen w-full items-center flex flex-col"
      style={{ fontFamily: "Gordita, sans-serif" }}
    >
      {/* HEADING */}
      <h1
        className="text-[3rem] sm:text-[5rem] md:text-[9rem] translate-y-[0%] sm:translate-y-[20%] md:translate-y-[38%] logo-font"
        
      >
        Know <span className="text-[#8C3917]">The Stage</span>
      </h1>

      {/* SECTION 1 */}
      <div className="w-full mt-16 sm:mt-20 md:mt-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[2fr_1.2fr] px-4 sm:px-6 md:px-10 gap-8">
        <div className="flex flex-col ms-0 sm:ms-5 md:ms-15">
          <h2 className="text-3xl sm:text-5xl md:text-7xl" style={{ fontFamily: "'Scope One', serif" }}>
            WHY?
          </h2>

          <p className="mt-6 sm:mt-10 md:mt-16 text-[15px] sm:text-[16px] md:text-[18px] w-full sm:w-[90%] md:w-[80%] leading-[22px] md:leading-[23px]" style={{ fontFamily: "'Scope One', serif" }}>
            Today, conversations are everywhere, yet many quietly encourage us
            to follow prevailing trends rather than ask what is grounded. The
            Stage exists as a space for careful thinking and structured
            dialogue, where ideas are examined before they are defended, tested
            rather than performed, and guided by an insistence on critical
            thinking. It is for those who do not settle for the surface and are
            willing to engage with ideas carefully and rigorously.
          </p>
        </div>

        <div className="flex justify-start">
          <img src={img2} className="w-full sm:w-[90%] md:w-[82%] h-auto object-cover" alt="" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1.2fr_2fr] px-4 sm:px-6 md:px-10 gap-8">
        <div className="flex justify-start ms-0 sm:ms-5 md:ms-15">
          <img src={img1} className="w-full sm:w-[80%] md:w-2/3 h-auto object-cover" alt="" />
        </div>

        <div className="flex flex-col ms-0 sm:ms-5 md:ms-18">
          <h2 className="text-3xl sm:text-5xl md:text-7xl" style={{ fontFamily: "'Scope One', serif" }}>
            WHAT?
          </h2>

          <p className="mt-6 sm:mt-10 md:mt-18 text-[15px] sm:text-[16px] md:text-[17px] w-full sm:w-[90%] md:w-[89%] leading-[22px] md:leading-[23px]" style={{ fontFamily: "'Scope One', serif" }}>
            The Stage is a curated intellectual space for serious conversation,
            structured to prioritise clarity, depth, and intellectual rigor. It
            hosts regular events that involve different forms of intellectual
            activity: <br />
            <span className="font-bold">Discourse</span> - a structured, moderator-led intellectual session where participants collectively examine ideas through open discussion. <br />
            <span className="font-bold">Monologic</span> - a single presenter
            develops and examines a coherent line of thought. <br />
            <span className="font-bold">Dialogic</span> - a structured debate
            between two participants focused on critical engagement. <br />
            <span className="font-bold">Panel</span> - a moderated discussion
            examining multiple perspectives around a defined question. <br />
            All sessions are deliberately curated to maintain intellectual
            quality and seriousness. Participation is organised through three
            types of membership, each defined by its mode of engagement with in
            the Stage.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="w-full mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[2fr_1fr] px-4 sm:px-6 md:px-10 gap-8">
        <div className="flex flex-col ms-0 sm:ms-5 md:ms-15">
          <h2 className="text-3xl sm:text-5xl md:text-7xl" style={{ fontFamily: "'Scope One', serif" }}>
            MEMBERSHIP & PARTICIPATION
          </h2>

          <p className="mt-6 sm:mt-10 md:mt-18 text-[15px] sm:text-[16px] md:text-[18px] w-full sm:w-[90%] md:w-[80%] leading-[22px] md:leading-[23px]" style={{ fontFamily: "'Scope One', serif" }}>
            Participation in <span className="font-normal">The Stage</span> is
            organised through three membership groups, each defining a mode of
            engagement while maintaining a shared standard of seriousness and
            intellectual discipline.{" "}
            <span className="font-normal">
              These groups are not hierarchical
            </span>
            ; they exist to structure access, participation, within the Stage.
            All members engage within a curated intellectual environment.Access
            to presentations, publications, special programs, and pre-session
            intellectual refinement varies by membership group and is outlined
            below.
          </p>
        </div>

        <div className="flex justify-start">
          <img
            src="https://i.pinimg.com/1200x/b5/13/2d/b5132d98b9e5d4ad36c8ba7b41552721.jpg"
            className="w-full sm:w-[80%] md:w-2/3 h-auto object-cover"
            alt=""
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium mb-10 sm:mb-12 md:mb-16">
            MEMBERSHIP BENEFITS
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-[600px] grid grid-cols-[2.5fr_1fr_1fr_1fr] gap-y-5 text-neutral-800">
              <div className="font-medium">Benefit Area</div>
              <div className="text-center font-medium">Group One</div>
              <div className="text-center font-medium">Group Two</div>
              <div className="text-center font-medium">Students Group</div>

              <div className="col-span-4 border-b my-2"></div>

              {[
                ["Access to Regular Events", "✓", "✓", "✓"],
                ["Access to Special Programs", "✓", "✕", "✕"],
                ["Participation in Monologic Sessions", "✓", "✓", "✓"],
                ["Participation in Dialogic Sessions", "✓", "✓", "✓"],
                ["Participation in Group / Panel Discussions", "✓", "✓", "✓"],
                ["Pre-Session Intellectual Refinement", "✓", "✓", "✓"],
                ["Publishing Written Works on Website", "✓", "✕", "✕"],
                ["Publishing Written Works on The Stage Monthly", "✓", "✕", "✕"],
                ["Publishing video recordings of sessions", "✓", "✕", "✕"],
                ["Access to Closed Events", "x", "✕", "✕"],
              ].map(([label, g1, g2, g3], i) => (
                <React.Fragment key={i}>
                  <div className="text-sm">{label}</div>
                  {[g1, g2, g3].map((val, idx) => (
                    <div key={idx} className="text-center font-semibold">
                      {val}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="w-full mt-16 sm:mt-20 mb-10 sm:mb-12 md:mb-15 flex flex-col items-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl">
          JOIN{" "}
          <span
            className="text-[#8C3917] logo-font"
            
          >
            The Stage
          </span>
        </h2>

        <p className="w-full sm:w-[80%] md:w-[50%] text-sm sm:text-base text-center mt-5"
         style={{ fontFamily: "'Scope One', serif" }}
        >
          The Stage welcomes those who seek serious engagement with ideas and
          value clarity, depth, anc intellectual responsibility. If the
          principles outlined here reflect how you think and inquire, you are
          invited to join the Stage and take part in conversations shaped by
          care, rigor, and intent.
        </p>
      </div>
    </div>
  );
};

export default AboutBrochure;