import React from "react";

const EventsGlimpse = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-14 lg:py-20">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start"
        style={{ fontFamily: "Gordita, sans-serif" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-10">
          <h1 className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-5xl xl:text-6xl font-normal uppercase leading-[1]">
            Our Archives
          </h1>

          <div>
            {/* ROW 1 */}
            <div className="group cursor-pointer border-b border-gray-300 px-3 py-4 sm:px-4 sm:py-5 md:p-5 transition-all duration-300 ease-out hover:bg-gray-100 lg:hover:scale-[1.01]">
              <h2 className="relative inline-block w-full text-[22px] sm:text-[26px] md:text-[30px] lg:text-3xl font-normal leading-tight">
                We achieved <br /> higher accuracy of final
                <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-[48%] transition-all duration-700 ease-out"></span>
              </h2>

              <p
                className="mt-3 text-[14px] sm:text-[15px] md:text-base font-light leading-relaxed text-gray-900"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                porro dolore, animi aliquam quisquam eius molestias accusantium
                libero.
              </p>
            </div>

            {/* ROW 2 */}
            <div className="group cursor-pointer border-b border-gray-300 px-3 py-4 sm:px-4 sm:py-5 md:p-5 transition-all duration-300 ease-out hover:bg-gray-100 lg:hover:scale-[1.01]">
              <h2 className="relative inline-block w-full text-[22px] sm:text-[26px] md:text-[30px] lg:text-3xl font-normal leading-tight">
                Robust clinical text classification using
                <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-[78%] transition-all duration-700 ease-out"></span>
              </h2>

              <p
                className="mt-3 text-[14px] sm:text-[15px] md:text-base font-light leading-relaxed text-gray-900"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                porro dolore, animi aliquam quisquam eius molestias accusantium
                libero.
              </p>
            </div>

            {/* ROW 3 */}
            <div className="group cursor-pointer px-3 py-4 sm:px-4 sm:py-5 md:p-5 transition-all duration-300 ease-out hover:bg-gray-100 lg:hover:scale-[1.01]">
              <h2 className="relative inline-block w-full text-[22px] sm:text-[26px] md:text-[30px] lg:text-3xl font-normal leading-tight">
                Deep learning for medical language
                <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-[72%] transition-all duration-700 ease-out"></span>
              </h2>

              <p
                className="mt-3 text-[14px] sm:text-[15px] md:text-base font-light leading-relaxed text-gray-900"
                style={{ fontFamily: "'Scope One', serif" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                porro dolore, animi aliquam quisquam eius molestias accusantium
                libero.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex h-full items-start justify-start lg:justify-end mt-2 lg:mt-0">
          <div className="w-full text-left lg:max-w-[700px] lg:text-right">
            <p className="text-[24px] sm:text-[30px] md:text-[38px] lg:text-5xl xl:text-6xl font-light leading-[1.35] sm:leading-[1.3] lg:leading-tight">
              <span className="font-medium">“Read </span>
              not to contradict and confute, nor to believe and take for
              granted, but to
              <span className="font-medium"> weigh and consider.”</span>
            </p>

            <p
              className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[20px] font-bold text-black lg:text-right"
              style={{ fontStyle: "italic", fontFamily: "Josefin Slab, serif" }}
            >
              - Francis Bacon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGlimpse;